const http= require('http')

http.createServer(function(req,res){

res.write("On the Way to being a Full Stack Dev");

res.end();




}


).listen(3000);
console.log("Server Started") 


