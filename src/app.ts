import express, { Application, Request, Response } from "express"
import cors from "cors"
import { mobileRoutes } from "./app/modules/mobile/mobile.route";
const app:Application = express()


// parser
app.use(express.json());
app.use(cors())

// application routes
app.use('/api/v1/mobile', mobileRoutes)

const getcontroller=(req:Request, res:Response) => {
  res.send('Hello World!')
}

app.get('/', getcontroller)

export default app;