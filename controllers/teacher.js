const Teacher = require("../service/teacher");

const getTeacherName = (request, response, next) => {
  const service = new Teacher();
  const data = service.getName();
  response.status(200).json(data);
};

module.exports = { getTeacherName };
