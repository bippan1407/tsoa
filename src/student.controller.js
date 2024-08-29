function StudentController(app) {
    app.get("/student", (req, res) => {
        return res.json({ message: "STudent!" });
    });
}
export { StudentController };
