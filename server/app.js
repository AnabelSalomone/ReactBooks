let express = require("express");
let app = express();
let cors = require("cors");
let bodyParser = require("body-parser");
let logger = require("morgan");
let helmet = require("helmet");
var firebase = require("firebase-admin");
require("firebase/database")

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(cors());
logger("tiny");
app.use(helmet());

const serviceAccount = require("./keys.json");

let config = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://react-books-975bb-default-rtdb.europe-west1.firebasedatabase.app",
};


firebase.initializeApp(config);

let db = firebase.database();

app.get("/", (req, res) => {
    db.ref().once("value")
    .then(function(snapshot) {
        console.log(snapshot.val())
    })
})

app.listen(3000, function () {
  console.log("Listened on port 3000!");
});