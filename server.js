var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var corsOptions = {
    origin: "http://localhost:8080"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var db = require("./app/models");
var dbConfig = require("./app/config/db.config");
var Role = db.role;
db.mongoose
    .connect("mongodb://" + dbConfig.HOST + ":" + dbConfig.PORT + "/" + dbConfig.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(function () {
    console.log("Успешное подключение к MongoDB");
    initial();
})["catch"](function (err) {
    console.error("Ошибка подключения", err);
    process.exit();
});
function initial() {
    Role.estimatedDocumentCount(function (err, count) {
        if (!err && count === 0) {
            new Role({ name: "user" }).save(function (err) {
                if (err) {
                    console.log("Ошибка добавления роли", err);
                }
                console.log("К коллекции ролей добавлен 'user'");
            });
            new Role({
                name: "moderator"
            }).save(function (err) {
                if (err) {
                    console.log("Ошибка добавления роли", err);
                }
                console.log("К коллекции ролей добавлен 'moderator'");
            });
            new Role({
                name: "admin"
            }).save(function (err) {
                if (err) {
                    console.log("Ошибка добавления роли", err);
                }
                console.log("К коллекции ролей добавлен 'admin'");
            });
        }
    });
}
app.get("/", function (req, res) {
    res.json({ message: "Приветствуем" });
});
// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/course.routes")(app);
var PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
    console.log("\u0421\u0435\u0440\u0432\u0435\u0440 \u0437\u0430\u043F\u0443\u0449\u0435\u043D \u043D\u0430 \u043F\u043E\u0440\u0442\u0443 " + PORT + ".");
});
