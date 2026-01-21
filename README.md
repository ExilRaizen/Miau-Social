```markdown
# 🐾 Miau Social - Discord Webhook Bot

Sistema de notificaciones automáticas que conecta publicaciones de redes sociales (Instagram/TikTok) con Discord utilizando **Node.js**, **Express** y **Make.com**, alojado en una infraestructura de alto rendimiento en **Oracle Cloud**.

## 🚀 Características
- **Recepción de Webhooks**: Escucha peticiones POST en el puerto 3000.
- **Automatización**: Integración fluida con Make.com para detectar nuevos posts.
- **Persistencia**: Gestión de procesos 24/7 con **PM2** para asegurar que el bot nunca se apague.
- **Seguridad**: Uso de variables de entorno para proteger tokens y credenciales.

## 🛠️ Tecnologías
- **Entorno**: Node.js v20+.
- **Framework Web**: Express.js.
- **Librería de Bot**: Discord.js v14.
- **Servidor**: Ubuntu 24.04 LTS en Oracle Cloud.
- **Automatización**: Make (Integromat).

## 📖 Tutorial de Funcionamiento y Configuración

### 1. ¿Cómo funciona este sistema?
El flujo de automatización sigue estos pasos para garantizar notificaciones instantáneas:
* **Detección**: Un escenario en **Make.com** monitorea las cuentas de RRSS (Instagram/TikTok) cada 15 minutos.
* **Envío de datos**: Cuando se detecta un nuevo post, Make envía una solicitud POST (Webhook) a la IP pública del servidor por el puerto 3000.
* **Procesamiento**: El servidor **Node.js**, gestionado por **PM2**, recibe la información y valida los datos.
* **Notificación**: El bot utiliza la librería **Discord.js** para enviar un mensaje al canal configurado.

### 2. Configuración del archivo `.env`
Por seguridad, el archivo de credenciales no se incluye en el repositorio. Debes crear un archivo llamado `.env` en la raíz del proyecto para definir las variables de entorno:

```env
TOKEN=tu_token_de_discord_aqui
CANAL_ID=id_del_canal_donde_publicara_el_bot
PORT=3000

```

### 3. Instalación e inicio en el Servidor (Bash)

Debes ejecutar estos comandos en la terminal de tu servidor (Ubuntu) para preparar el área de trabajo e iniciar el bot:

```bash
# Instalar dependencias necesarias
npm install

# Iniciar el bot con PM2 para ejecución en segundo plano
pm2 start index.js --name "miau-social-bot"

# Guardar la lista de procesos para reinicios automáticos del sistema
pm2 save

```

### 4. Configuración en Make.com

* Crea un escenario que vigile tus RRSS.
* Añade un módulo **HTTP (Make a request)** que envíe un JSON a: `http://TU_IP:3000/webhook`.
* El cuerpo (body) de la petición debe contener los campos: `plataforma`, `enlace` y `mensaje`.

---

Desarrollado por [ExilRaizen]

```



