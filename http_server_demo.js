import http from "http"

const server = http.createServer((req,res) =>{
    
    // console.log("Method: ", req.method);
    // console.log("URL: ", req.url);

    // if (req.url === "/"){
    //     res.end("Welcome to my server!");
    // }
    // else if(req.url === "/about"){
    //     res.end("This is the about page.")
    // }
    // else if (req.url === "/contact"){
    //     res.end("Contact us here.")
    // }
    
    // else{
    //     res.statusCode = 404;
    //     res.end("Page not found");
    // }
    
    // res.end("Hello from Node.js!")



})

server.listen(3000, ()=>{
    console.log("Server running on http://localhost.com:3000");
    
})