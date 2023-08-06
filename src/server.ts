import express, { Response, Request } from "express";
import httpStatus from "http-status";

const app = express();

app.use(express.json());

const port = process.env.PORT ?? 3000;

app.get("/", (_req: Request, res: Response) => {
  console.log("get all");
  res.status(httpStatus.OK).send({ message: "connected" });
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
