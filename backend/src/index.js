const express = require ("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const routes = require("./routes");
const port = 3333;


app.use(cors({origin: 'http://localhost:3002'}))
app.use(express.json());
app.use(routes);
mongoose.connect('mongodb+srv://gll:181505@cluster0-snogr.mongodb.net/glldb?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});




app.listen(port, () =>{
    console.log(`Server is running at port ${port}`);
});