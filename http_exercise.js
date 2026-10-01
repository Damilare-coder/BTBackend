import http from "http"

const server = http.createServer((req,res)=>{

    if (req.url==="/"){
        res.end("Welcome to Damilare's Node Server!")
    }
    
    else if (req.url==="/about"){
        res.end("This is the about page!")
    }
    else if (req.url==="/skills"){
        res.end("Node.js | JavaScript | Cybersecurity")
    }

    else{
        res.statusCode = 404;
        res.end("404 - Page not found");
        console.log("404 - Page not found");


    }
    
    console.log("Method: ", req.method);
    console.log("URL: ", req.url);

})


server.listen(4000, ()=>{
    console.log("Server running on http://localhost:4000");
    
})