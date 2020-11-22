const express = require("express");
const app = express();
const http = require('http')
const bodyParser = require('body-parser')

const server = http.createServer(app)
const PORT = process.env.PORT|| 5000;

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
)


app.get("/classesP",function(req,res)
{

 res.send("REACT");

})


server.listen(PORT, () => {
 console.log(`App running on port ${PORT}.`)
})