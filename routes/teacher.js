const { getTeacherName } = require("../controllers/teacher");

module.exports = function (app) {
  app.use("/teacher/name", getTeacherName);
};
