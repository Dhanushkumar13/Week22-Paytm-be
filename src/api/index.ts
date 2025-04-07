const express = require('express');
import { Request, Response, NextFunction } from "express";

const router = express.Router();

router.post('/signup', (req: Request,res: Response,next: NextFunction)=>{
    const userName = req.body.userName;
    const password = req.body.password;

    console.log(`${userName}${password}`)
})

router.post('/signin', (req: Request,res: Response,next: NextFunction)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    console.log(`${userName}${password}${firstName}${lastName}`)
})
 
module.exports = router;