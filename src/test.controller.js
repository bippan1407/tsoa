module.exports = {
  TestController: function (app) {
    app.get("/test", (req, res) => {
      return res.json({ message: "TEST!" });
    });
  },
};
