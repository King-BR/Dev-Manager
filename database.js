const mongoose = require("mongoose");
const Schema = mongoose.Schema
let { dbURL } = require('./config.json')

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true }, error => {
    if (error) {
        console.log(`Erro: ${error}`);
        process.exit(1);
        return 1;
    }
    console.log("Conectado ao banco de dados");
    return 0;
});

    let Server = new Schema({
        _id: {
            type: String,
            required: true
        },
        antimassban: {
            lastCheck: {
                type: String
            }
        }
    }) 

const Servers = mongoose.model('Servers', Server);
exports.Servers = Servers;

    let Usuario = new Schema({
        _id: {
            type: String,
            required: true,
        },
        name: String,
        rep: {
            type: Number,
            default: 0
        },
        repcooldown: {
            type: Number,
            default: 0
        }
    });


const Usuarios = mongoose.model('Usuarios', Usuario);
exports.Usuarios = Usuarios;
