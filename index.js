const express = require('express')
const path = require('path')
const cors = require('cors')
const math = require('mathjs')
//const { Recoverable } = require('repl')
const app = express()

app.use(express.static(__dirname + '/src/html'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/Autores',(req, res)=>{
    console.log("hentai");
    res.statusCode = 200;
    res.send({"autor1":"PedroHS","autor2":"HectorZ"})
    //res.sendFile(path.join(__dirname, 'html', 'index.html'))
})

app.post('/Suma', (req, res)=>{
    let num = req.body.nums;
    let total = 0;
    for (const s of num) {
        total+=s
    }
    console.log(req.body.nums)
    res.send({"respuesta":total})
})

app.post('/Resta', (req, res)=>{
    let num = req.body.nums;
    let resta = req.body.numToSubs;
    let total = 0;
    for (const s of num) {
        total+=s
    }
    total-=resta;
    console.log(req.body.nums)
    res.send({"respuesta":total})
})

app.post('/Multiplica', (req, res)=>{
    let num = req.body.nums;
    let total = 1;
    for (const s of num) {
        total*=s
    }
    console.log(req.body.nums)
    res.send({"respuesta":total})
})

app.post('/Divide', (req, res)=>{
    let num = req.body.nums;
    let division = req.body.numToDiv;
    let total = 0;
    for (const s of num) {
        total+=s
    }
    total/=division;
    console.log(req.body.nums)
    res.send({"respuesta":total})
})

app.post('/Free', (req, res)=>{
    let str = req.body.operation;
    //let division = req.body.numToDiv;
    let total = math.evaluate(str);
    console.log(req.body.operation)
    res.send({"respuesta":total})
})

app.listen(3000, function(){
    console.log('app is running in http://localhost:3000')
})
