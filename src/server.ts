import express, { Response, Request } from "express";
import cors, { CorsOptions } from 'cors'
import httpStatus from "http-status";
import notesRouter from "./modules/notes/notes.routes";

const app = express();

app.use(express.json());

const corsOptions: CorsOptions = {
  origin: 'http://localhost:5173'
};

app.use(cors(corsOptions));

const port = process.env.PORT ?? 3000;

app.get("/", (_req: Request, res: Response) => {
  console.log("get all");
  res.status(httpStatus.OK).send({ message: "connected" });
});

app.use(notesRouter)

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
