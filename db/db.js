const mongoose = require('mongoose');
const { DB_LOGIN, DB_PASSWORD } = require("../config.json")

mongoose.connect(`mongodb+srv://${DB_LOGIN}:${DB_PASSWORD}@cluster0.wnfgw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

db.on('error', err => console.log(err))
db.once('open', () => console.log("Connected to DB"))