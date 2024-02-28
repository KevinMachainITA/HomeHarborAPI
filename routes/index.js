import express from 'express';

const router = express.Router();

export default function () {
    router.get('/', (req, res) =>{
        res.send('from init');
    });

    router.get('/users', (req, res) => {
        res.send('from users');
    });

    return router;
}
