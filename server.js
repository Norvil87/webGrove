const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const dbConfig = require("./app/config/db.config");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Успешное подключение к MongoDB");
    initial();
  })
  .catch(err => {
    console.error("Ошибка подключения", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({ name: "user" }).save(err => {
        if (err) {
          console.log("Ошибка добавления роли", err);
        }

        console.log("К коллекции ролей добавлен 'user'");
      });

      new Role({
        name: "moderator",
      }).save(err => {
        if (err) {
          console.log("Ошибка добавления роли", err);
        }

        console.log("К коллекции ролей добавлен 'moderator'");
      });

      new Role({
        name: "admin",
      }).save(err => {
        if (err) {
          console.log("Ошибка добавления роли", err);
        }

        console.log("К коллекции ролей добавлен 'admin'");
      });
    }
  });
}

app.get("/", (req, res) => {
  res.json({ message: "Приветствуем" });
});

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}.`);
});
