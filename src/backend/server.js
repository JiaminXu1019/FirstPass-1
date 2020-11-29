const express = require("express");
const app = express();
const http = require('http')
const bodyParser = require('body-parser')
const util = require('util')

// Connection from frontend to backend
var cors = require('cors')
app.use(cors())

const server = http.createServer(app)
const PORT = process.env.PORT|| 5000;

const fs = require('fs');
var allClasses = null;
var percent_filled = null; 


/* reading in the file for all the class names and the percent of seats full and convert them to JSON arrays */

const readFile = util.promisify(fs.readFile)

async function read(fileName) {
   return readFile(fileName)
   .then(res => {
    let data = JSON.parse(res);
 
    return data;
   })
   .catch(err => {
    throw err
   })
 };
 
async function run() {
 try {
 allClasses = await read('src/backend/JSON_Data/class_names.json')
 percent_filled = await read('src/backend/JSON_Data/pct_data.json');
 } catch (err) {
  throw err
 }
}

run()
.then(() => {
 
  /* filter the data so that only classes which contain dates with all full seats are in the array */ 
 for(let i = 0; i < percent_filled.length; i++)
 {
  percent_filled[i] = percent_filled[i].filter((obj)=> obj.y === 100);
 }


})


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/",function(req,res)
{
 res.send("Server");
})

/*Structure of an element in the classes array
  {
    label: className,
    value: className
  }
*/
app.post("/classesData",function(req,res)
{
  console.log(req.body);
try{
 const classes = req.body.classes;
 var dates = [];

 for(let i = 0; i < classes.length; i ++)
 {
   let c = classes[i].value;
   const index = allClasses.indexOf(c);

   if(percent_filled[index][0] !== undefined)
   {
    const date = percent_filled[index][0].x;
    dates.push(date);
   }
   else{
    dates.push(9999);
   }
  }

 res.status(200).send(dates);
  }
 catch(error) {
  return res.status(500).json({error: error.message })
}

})

server.listen(PORT, () => {
 console.log(`App running on port ${PORT}.`)
})
