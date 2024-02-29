import express from 'express';
import routes from './routes/index.js'; // Is necessary extension .js
import mongoose from 'mongoose';

//conect mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/HomeHarborAPI');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', routes());

app.listen(5000);