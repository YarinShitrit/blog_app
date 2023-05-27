const http = require('http')
const fs = require('fs')
const _ = require('lodash')

const server = http.createServer((req, res) => {
    
    //lodash
    const num = _.random(0, 20)
    console.log(num)
    const greet = _.once(() => {
        console.log('hello')
    })()
    //set HTML header content type
    res.setHeader('Content-Type', 'text/html')

    let path = "./views/";
    switch(req.url){
        case '/':
            path += "index.html"
            res.statusCode = 200
            break
        case "/about":
            path += 'about.html'
            res.statusCode = 200
            break
        case "/about-us":
            res.setHeader('Location', '/about')
            res.statusCode = 301
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break    
    }
    //send fs html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
        }else {
            res.write(data)
        }
        res.end()
    })
});

server.listen(8080, 'localhost', () => {
    console.log('listening on port 8080');
})
