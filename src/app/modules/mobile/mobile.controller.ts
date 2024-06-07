import { Request, Response } from "express";
import { mobileServices } from "./mobile.service";

const createMobile =async (req: Request, res: Response) => {
    try {
        const {mobile} = req.body;
    // will call service function to send this data
    const result = await mobileServices.createMobileToDB(mobile)
    res.status(200).json({
        success: true,
        message: "mobile data inserted into database",
        data: result
    })
    }
    catch (err) {
        console.log(err)
    }
}
const getAllmobiles = async (req: Request, res: Response) => {
    try {
        const result = await mobileServices.getAllMobilesFromDB();
        res.status(200).json({
            success: true,
            message: "get all students from database",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const mobileControllers = {
    createMobile,
    getAllmobiles
}