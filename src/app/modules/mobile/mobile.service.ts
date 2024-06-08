import { Tmobile } from "./mobile.interface"
import { mobileModel } from "./mobile.model"
import { ObjectId } from 'mongodb'; 

const createMobileToDB = async(mobile:Tmobile) => {
    const result = await mobileModel.create(mobile)
    return result;
}

const getAllMobilesFromDB = async () => {
    const result = await mobileModel.find();
    return result;
}

const getMobileByIdFromDB = async (id:string) => {
    const result = await mobileModel.findOne({ _id: new ObjectId(id) })
    return result
}
export const mobileServices = {
    createMobileToDB,
    getAllMobilesFromDB,
    getMobileByIdFromDB
}