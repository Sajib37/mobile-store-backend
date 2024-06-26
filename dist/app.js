"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mobile_route_1 = require("./app/modules/mobile/mobile.route");
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api/v1/mobiles', mobile_route_1.mobileRoutes);
const getAController = () => (req, res) => {
    res.send('Hello World!');
};
app.get('/', getAController);
exports.default = app;
