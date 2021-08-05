const express = require('express');
const app = express();
const {v4: uuidv4} = require('uuid');
const server = require('http').Server(app);
const io = require('socketio')(server)


app.set('view engine' , 'ejs');

app.use(express.static('public'))


app.get('/',(req,res)=>{
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room',(req,res)=> {
    res.render('room',{roomId: req.params.room});
})

io .on('connection',socket => {

})

server.listen(3030);