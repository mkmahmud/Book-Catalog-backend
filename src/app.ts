import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import cors from "cors";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import routes from "./app/routes";

// import ApiError from './Errors/ApiErrors'
// Cors
app.use(cors());
app.use(cookieParser());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application ROutes
// app.use('/api/v1/users/', UserRoutes)
// app.use('/api/v1/academic-semesters/', academicSemesterRoutes)

app.use("/api/v1", routes);

// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Server is runing')
//   // throw new ApiError(400, 'Pre baba error')
//   Promise.reject(new Error('Uhaled Promise Rejection'))
//   // next('Ore Baba Error Next')
// })

// Handel not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Not Found",

    errorMessage: [
      {
        path: ".",
        message: "API not found",
      },
    ],
  });
  next();
});

export default app;
