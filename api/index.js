var express = require('express');
var app = express();
var cors = require("cors")

app.use(cors());


app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/maxNo/:array', function(req,res){
   elements = req.params.array.split(",")
  
   var max = elements[0]
   
   for(i=0; i<elements.length; i++){
      if (elements[i]>max)
      {
         max=elements[i]
      }
   }

   res.send(max)
});
app.listen(9000);