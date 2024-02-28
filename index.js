import express from 'express';
import routes from './routes/index.js'; // Is necessary extension .js

const app = express();

app.use('/', routes());

app.listen(5000);