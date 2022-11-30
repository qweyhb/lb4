const express = require('express'); 
const app = express(); 
const port = 8080; 

let n = 10; 
let m = 20; 
const fib=(n,m)=> { 
let a = 1; 
let b = 1; 
for (let i = 3; (i <= n); i++) { 
    let c = a + b; 
    a = b; 
    b = c; 
} 
return b; 
 
} 
app.get("/", (req, res) => { 
    const a =fib(n,m) 
    console.log(a) 
    res.send({ success: true, code: fib(n,m)}); 
 }); 

app.listen(port, () => { 
console.log(`Example app listening at http://localhost:${port}`) 
});