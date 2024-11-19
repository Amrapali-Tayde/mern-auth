import path from 'path';
import express, { urlencoded } from "express";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(urlencoded({extended: true}));
app.use(cookieParser());

const port = process.env.PORT || 5006;

app.use('/api/user', userRoutes);

if(process.env.NODE_ENV === 'production'){
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, 'frontend/dist')));

  app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html')));
}
else {
  app.get('/', (req,res)=>{
    res.send('Server is ready');
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server is listening to port ${port}`);
});