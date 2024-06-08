import { MobileValidationSchema } from './mobile.validation';
import { Request, Response } from "express";
import { mobileServices } from "./mobile.service";

const createMobile =async (req: Request, res: Response) => {
    try {
        const { mobile } = req.body;
        const validatedData= MobileValidationSchema.parse(mobile)
    // will call service function to send this data
    const result = await mobileServices.createMobileToDB(validatedData)
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
            message: "get all mobiles from database",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}
const getMobileById = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const result = await mobileServices.getMobileByIdFromDB(id);
        res.status(200).json({
            success: true,
            message: "get mobile by name",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const mobileControllers = {
    createMobile,
    getAllmobiles,
    getMobileById
}