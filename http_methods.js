import http from "http"

const myServer = http.createServer((req, res) =>{
    if(req.method === "GET" && req.url === "/users"){
       
        res.writeHead(200, {
            "Content-Type":"text/plain"
        })
        res.end("Here are the users")
    }

    else if(req.method === "POST" && req.url === "/users"){
        
        res.writeHead(201, {
            "Content-Type":"text/plain"
        })
        res.end("User created successfully")
    }
    
    else{
        res.writeHead(404, {
            "Content-Type":"text/plain"
        })

        res.end("404 - Route not found")  
    }

    console.log("Method: ", req.method);
    console.log("URL: ", req.url);
})



myServer.listen(4000, ()=>{
    console.log("Server running on http://localhost:4000");   
})











































































