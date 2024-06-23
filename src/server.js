import express from 'express';
import { config } from './config.js/env.js';
import { createUserTable } from './user/user.model.js';

const app = express();

app.use(express.json());

app.get('/', (req,res) =>{
    res.status(200).json({
        message: 'Welcome to my first E-commerce page',
        user: req.user
    })
});


app.listen(config.port, async () => {
    await createUserTable();
    console.log (`server running on port`, config.port)
})