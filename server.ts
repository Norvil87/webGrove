import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./app/routes/auth.routes";
import userRoutes from "./app/routes/user.routes";
import courseRoutes from "./app/routes/course.routes";
import db from "./app/models";
import dbConfig from "./app/config/db.config";

const PORT = process.env.PORT || 8081;
const Role = db.role;
const app = express();

const corsOptions = {
  origin: "http://localhost:8080",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

authRoutes(app);
userRoutes(app);
courseRoutes(app);

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Успешное подключение к MongoDB");
    //initial();
  })
  .catch(err => {
    console.error("Ошибка подключения", err);
    process.exit();
  });

const initial = () => {
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
};

app.get("/", (req, res) => {
  res.json({ message: "Приветствуем" });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}.`);
});
