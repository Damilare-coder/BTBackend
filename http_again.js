import http from "http"

const server = http.createServer((req, res)=>{

    if(req.method === 'GET' && req.url === '/home'){
        res.end("Welcome to Damilare's homepage")
    }
    else if(req.method === 'GET' && req.url === '/about'){
        res.end("This is about page")
    }
    else if(req.method === 'GET' && req.url === '/skills'){
        res.end("Cybersecurity | Backend | DevSecOps")
    }

    else{
        res.statusCode = 404
        res.end("404 - Page not found")
        console.log("404 - Page not found");
    }

    console.log("Method: ", req.method);
    console.log("URL: ", req.url);

})

server.listen(4600, ()=>{
    console.log("Server is running on http://localhost:4600");
    
})