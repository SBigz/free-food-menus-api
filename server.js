const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);

server.use((req, res, next) => {
  const { food } = req.query;
  
  // Vérifier si le paramètre 'food' est présent
  if (food) {
    // Filtrez les données en fonction de la catégorie spécifiée (par exemple, 'food=desserts')
    const filteredData = router.db.get("db")
      .filter(item => item.food === food)
      .value();

    // Remplacez les données de la réponse par les données filtrées
    res.locals.data = filteredData;
  }

  next();
});

server.use(router);

server.listen(port, () => console.log(`Server is listening on port ${port}`));
