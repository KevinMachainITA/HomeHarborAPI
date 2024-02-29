import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

export default function () {
    
    //Routes to users
    router.get('/users', UserController.index);
    router.post('/users', UserController.store);

    return router;
}
