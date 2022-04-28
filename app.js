console.log('Express Tutorial')

// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log("the server is hitted")
//     res.end("this is the home page")
// })

// server.listen(1232)


// res.end is always nesessary at the end
// res.writeHead(200,{'content-type':'text/html'})
// the above means that the incomming data in response is html so we can send thehtml express is doing thaat
// see the behaviour with the plain
// res.writeHead(200,{'content-type':'text/plain'})
// 200 means request is successfull
// see http status codes
// 100 bad request 400 not found

// res.writeHead(200,{'content-type':'text/plain'})
// see the status codes and mime types mdn
// the above the 200 like is the status code and the text/html is the is the mime type

// we mostly can see the results in the network and click the localhost and see the more details the response and the header

// see the course-api.com




// let http=require("http")
// let server=http.createServer((req,res)=>{
//     console.log(req.method)
//     console.log(req.url)
//     res.writeHead(200,{'content-type':'text/html'})
//     res.write(`<h1>the above is the header and this is the body<h1/>`)
//     res.end()
// })

// server.listen(1000)



// in the below we are checking for the requests
// we see the erros of successfulll in the network 
// the below  we can see that we are passing the content only not the file itself and we are also saying them the content type is html

// let http=require("http")
// let server=http.createServer((req,res)=>{
//     method=req.method
//     url=req.url
//     if(url==="/"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(`<h1>this si sthe home page<h1/>`)
//         res.end()
//     }
    
//     else if(url==="/about"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(`<h1>this si the about page<h1/>`)
//         res.end()
//     }
    
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write(`<h1>this page doest exists<h1/>`)
//         res.end()
//     }
// })

// server.listen(1000)


// now below making the file for the pages and dending them also see with the content-type:"text/plain"

// let http=require("http")
// let fs=require("fs")
// let about =fs.readFileSync("./about.html")
// let home =fs.readFileSync("./home.html")

// let server=http.createServer((req,res)=>{
//     method=req.method
//     url=req.url
//     if(url==="/"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(home)
//         res.end()
//     }
    
//     else if(url==="/about"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(about)
//         res.end()
//     }
    
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write(`<h1>this page doest exists<h1/>`)
//         res.end()
//     }
// })

// server.listen(1000)



// see the below setup we are using the navbar-app 
// in the below we see the error because we are moving the index.html file but this file is using the styles.css and the js file for the external like fonticon there is no problem but for the interner file we are to provide them  in request.url it need the css js logo we we have to provide them already these requirement are in the url

// let http=require("http")
// let fs=require("fs")
// let home=fs.readFileSync("./navbar-app/index.html")
// let cssfile=fs.readFileSync("./navbar-app/styles.css")
// let jsfile=fs.readFileSync("./navbar-app/browser-app.js")
// let logo=fs.readFileSync("./navbar-app/logo.svg")
// let server=http.createServer((req,res)=>{
//     console.log(req.url)
//     if(req.url==="/"){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(home)
//         res.end()
//     }
//     else if(req.url==="/styles.css"){
//         res.writeHead(200,{'content-type':'text/css'})
//         res.write(cssfile)
//         res.end()
//     }
//     else if(req.url==="/browser-app.js"){
//         res.writeHead(200,{'content-type':'text/jsvascript'})
//         res.write(jsfile)
//         res.end()
//     }
//     else if(req.url==="/logo.svg"){
//         res.writeHead(200,{'content-type':'image/svg+xml'})
//         res.write(logo)
//         res.end()
//     }
//     else{
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(`this file doesnt exists`)
//         res.end()
//     }
// })

// server.listen(1000)





// the below is the express
// npm install express --save
// // for the john version
// npm install express@4.17.1 --save
// when user go google.com it is asking for the get request



// THE BELOW WE ARE USING THE EXPRESS 
// we are sending the status code 200 is for the seccess and 404 is for the not found we can see thst in the network
// app.all or in that * means that the pages that desnt exits will send that type of the mesage

// let express=require("express")

// let app=express()

// app.get("/",(req,res)=>{
//     res.status(200).send(`<p>This is the home page</p>`)
// })

// app.get("/about",(req,res)=>{
//     res.status(200).send(`<h1>this is the about page<h1/>`)
// })

// app.all("*",(req,res)=>{
//     res.status(404).send("this page doest exit")
// })

// app.listen(1234,()=>{
//     console.log("the user hit the sever 1234")
// })

// the below are the methods 
// get
// put
// post
// delete
// all
// listen
// use


// NOW BELOW ARE SENDING THE FILE BY WE MAKE BY OUR OWN
// path.resolve is used to send the absolute path the complete path from starting to the end

let express=require("express")
let app=express()

let path=require("path")

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navbar-app/index.html"))
})

app.use(express.static("./public"))
// now we want the css js ,logo for the html so for that we have one line code below but we have to make thw foldenamed as public and put all the required files in it

app.all("*",(req,res)=>{
    res.send("this file is nopt present")
})


app.listen(1000) 