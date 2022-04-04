const http = require("http");
const moment = require("moment");

const server = http.createServer((req, res) => {
        let hora = parseInt(moment().format("HH"));
        console.log(hora);
        if(hora >= 06 && hora <= 12){
            res.end("Buen Día");    
        }
        if(hora >= 13 && hora <= 19){
            res.end("Buenas Tardes");    
        }
        if(hora >= 20 || hora <= 05){
            res.end("Buenas Noches");    
        }
    
});

const portListen = server.listen(5000, () =>{
    console.log("server running on port 5000");
});