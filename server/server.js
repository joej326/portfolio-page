const express = require('express');
const app = express();

app.use(express.static(__dirname+'/../build'));
app.listen(8002, function(){
console.log("Listening on port 8001");
});
