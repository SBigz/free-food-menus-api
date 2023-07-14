const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);

server.use((req, res, next) => {
  const food = req.query.food;
  if (food) {
    const data = router.db.get(food).value();
    res.json(data);
  } else {
    next();
  }
});

server.use(router);

server.listen(port, () => console.log(`Server is listening on port ${port}`));
