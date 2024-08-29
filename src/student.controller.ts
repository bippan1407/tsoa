import { Response } from "express";
import { Request } from "express";
import { Express } from "express";
function StudentController(app: Express) {
  app.get("/student", (req: Request, res: Response) => {
    return res.json({ message: "STudent!" });
  });
}
export { StudentController };
