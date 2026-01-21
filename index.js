require('dotenv').config({ path: __dirname + '/.env' });
const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express'); // Para recibir alertas externas
const app = express();

app.use(express.json());

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

// ESTO ES PARA DEPURAR (DEBUG)

console.log("Ruta del bot:", __dirname);

console.log("¿Token detectado?:", process.env.TOKEN ? "SÍ (contenido cargado)" : "NO (archivo .env no detectado)");

// ID del canal donde el bot escribirá (Pégalo aquí)
const CANAL_ID = '1325082597138759695';

client.once('ready', () => {
    console.log(`✅ ¡Bot conectado como ${client.user.tag}!`);
});

// Esta ruta recibirá los avisos de Instagram/TikTok
app.post('/webhook', (req, res) => {
    const { plataforma, enlace, mensaje } = req.body;
    
    const canal = client.channels.cache.get(CANAL_ID);
    if (canal) {
        canal.send(`📢 **¡Nuevo post en ${plataforma}!**\n${mensaje}\n${enlace}`);
    }
    
    res.status(200).send('Alerta enviada a Discord');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('🚀 Servidor de alertas escuchando en el puerto 3000');
});

client.login(process.env.TOKEN);