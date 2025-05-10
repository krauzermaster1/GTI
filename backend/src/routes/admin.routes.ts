import express from 'express';
const router = express.Router();


router.get('/', (req, res)  => {
    res.send('testando rota do administrador')
})

export default router;