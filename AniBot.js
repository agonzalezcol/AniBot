//DOCUMENTO PRINCIPAL DEL BOT

const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json"); //AGREGAMOS VARIABLE CON LA CONFIGURACION INSTANCIADA CONFIG.JASON AL BOT

client.on("ready", () => {
    console.log("Estoy en funcionamiento y listo para servir!"); //INDICADOR DE INICIO CORRECTO EN CONSOLA
    client.user.setActivity("Atento a ordenes"); //MUESTRA ESTADO DE USUARIO (BOT)
});

var  prefix = config.prefix;

client.on("message", (message) => {

    //---PREVENCION DE BUCLES DE RESPUESTA ENTRE BOTS
    if (!message.content.startsWith(prefix)) return; //SI MENSAJE NO EMPIEZA CON PREFIX NO HACE NADA
    if (message.author.bot) return; //SI UN BOT ESCRIBE MENSAJE NO HACE NADA
    //---


    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
    } else
    if (message.content.startsWith(prefix + "hola")) {
        message.channel.send("Hola que tal?");
    }
    if (message.content.startsWith(prefix +"embed")){ //EMBAD BASICO
        message.channel.send({embed: {
                color: 3447003, //DETERMINA COLOR DE BARRA IZQ.
                description: "Esto es un simple mensaje embed."
            }});
    }
    if (message.content.startsWith(prefix +"richembed")){ //CONSTRUCTOR RICHEMBED
        const embed = new Discord.RichEmbed()
            .setTitle("Este es su título, puede contener 256 caracteres")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setColor(0x00AE86)
            .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
            .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
            .setImage(message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setTimestamp() //AGREGA EL TIEMPO ACTUAL
            .setURL("https://github.com/CraterMaik")
            .addField("Este es un título de campo, puede contener 256 caracteres",
                "Este es un valor de campo, puede contener 2048 caracteres.")
            .addField("Campo en línea", "Debajo del campo en línea", true)
            .addBlankField(true) //AGREGA UN ESPACIO
            .addField("Campo en línea 3", "Puede tener un máximo de 25 campos.", true);

        message.channel.send({embed});
    }
});
client.login(config.token);