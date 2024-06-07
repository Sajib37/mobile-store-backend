"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mobileRoutes = void 0;
const express_1 = __importDefault(require("express"));
const mobile_controller_1 = require("./mobile.controller");
const router = express_1.default.Router();
router.post('create-mobile', mobile_controller_1.mobileControllers.createMobile); //will call controller
exports.mobileRoutes = router;
