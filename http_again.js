import http from 'http'

const server = http.createServer((req,res) =>{
    if(req.method === "GET" && req.url == "/home"){
        res.end("Welcome to Damilare's homepage")
    }
    else if(req.method === "GET" && req.url == "/about"){
        res.end("This is about us")
    }
    
    else if(req.method === "GET" && req.url == "/skills"){
        res.end("Cybersecurity | Dev")
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page not found");
        console.log("Page not found");
    }

    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
    

})


server.listen(5900, ()=>{
    console.log("Server running at localhost:5900");
    
})




