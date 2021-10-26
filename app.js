const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8383;

app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers","Content-Type")
    res.header("Content-Type", "application/json");

    next()
})

async function main() {
    await mongoose.connect('mongodb+srv://usuario_admin:c4SNdNmvziJXBJhf@cluster0.1xxzz.mongodb.net/Gestao_de_Leads?retryWrites=true');
}

main().catch(err => console.log(err));

app.listen(process.env.PORT, '0.0.0.0',() => {
    console.log('Servidor on-line!');
});

app.get('/', async (req, res) => {
    res.send('<h1>Naruto pode ser duro às vezes.</h1>')
});

app.use('/leads', require('./routes/leads'))

module.exports = app;
