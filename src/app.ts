import express, { Request, Response } from "express";
import { TestController } from "./test.controller";
import { StudentController } from "./student.controller";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response): Response => {
  return res.json({ message: "Hello, World Wide Web!" });
});

TestController(app);
StudentController(app);
const start = async (): Promise<void> => {
  try {
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
