import { Router } from "express";
import z from 'zod'
import jwt from 'jsonwebtoken'
import JWT_SECRET from '../config';
import {UserModel} from '../db'
import config from "../config";

//zod validation
const signupBody = z.object({
    username: z.string().email(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})

router.post('/signup',async(req: Request,res: Response)=>{
    const parsed = signupBody.safeParse(req.body)

    if(!parsed.success){
       return res.status(411).json({
            message: "Email already taken/ incorrect inputs"
        })
    }

    const existingUser = await UserModel.findOne({
        username: req.body.username
    })

    if(existingUser){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await UserModel.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })
    
    const token = jwt.sign({
        userId: UserModel._id
    },config.jwt.secret)

})

export default router;