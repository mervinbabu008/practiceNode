const express = require("express");
const app = express();

const port = process.env.PORT || 9000; // Important for Beanstalk

app.use(express.json());

app.get('/get', (req, res) => {
  res.json({ msg: "success" data:[{"name":"silla","age":30}]});
});

app.get('/', (req, res) => {
  res.json({ msg: "connected" });
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

// const express = require("express")
// const app = express()
// const port = process.env.PORT || 9000; // Important for Beanstalk
// //const port = 9000
// app.use(express.json())
// app.get('/get',(req,res)=>{
//     res.json({msg:"sucess"})
// })
// app.get('/',(req,res)=>{
//     res.json({msg:"connected"})
// })
// // app.listen(port,()=>{
// //     console.log("welcome port 6000")
// // })
// module.exports.handler = serverless(app)
// // const http = require("http")
// // const url = http.createServer((req,res)=>{
// //     console.log("welcome http")
// //     if(req.url =="/getData"){
// //         res.json({msg:"sucess",data:[]})
// //     }
// //     if(req.url =="/"){
// //         res.end(JSON.stringify({ message: 'Hello, World!' }));
// //     }
// // })
// // const httpport = 7000

// // url.listen(httpport,()=>{
// //     console.log("welcome port ",+ httpport)
// // })

