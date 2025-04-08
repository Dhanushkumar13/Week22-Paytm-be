import express from 'express'
import { Request, Response, NextFunction } from "express";
import userRouter from '../routes/user'

const router = express.Router();

router.use('/user',userRouter)
 
module.exports = router;