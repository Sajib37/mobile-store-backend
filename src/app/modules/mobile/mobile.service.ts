import { Tmobile } from "./mobile.interface"
import { mobileModel } from "./mobile.model"

const createMobileToDB = async(mobile:Tmobile) => {
    const result = await mobileModel.create(mobile)
    return result;
}

const getAllMobilesFromDB = async () => {
    const result = await mobileModel.find();
    return result;
}
export const mobileServices = {
    createMobileToDB,
    getAllMobilesFromDB
}