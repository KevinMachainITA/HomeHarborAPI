import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

export default function () {
    
    //Routes to users
    router.get('/users', UserController.index);
    router.post('/users', UserController.store);
    router.get('/users/:idUser', UserController.show);
    router.put('/users/:idUser', UserController.update);
    router.delete('/users/:idUser', UserController.delete);

    return router;
}
