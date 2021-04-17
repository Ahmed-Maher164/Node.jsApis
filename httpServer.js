const express = require('express')
const http = require('http')

const server = http.createServer()

server.on('request',(request , response)=>{

    if(request.url === "/"){
        response.end("Home Page")
    }
    else if(request.url === "/user"){
        response.end("User Page")
    }

})

server.listen(3000 , (err)=>{
    if(err) return console.log(err)
    console.log("started server on port 3000");
})
