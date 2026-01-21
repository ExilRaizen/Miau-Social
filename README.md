¡Entendido! Tienes razón, si el repositorio ya está bajo tu nombre de usuario, repetir "Desarrollado por" en un bloque aparte sobra y rompe la estética del perfil.

Aquí tienes el contenido definitivo y limpio para tu `README.md`. He eliminado esa frase final y ajustado el formato para que todo fluya mejor visualmente:

```markdown
# 🐾 Miau Social - Discord Webhook Bot

Sistema de notificaciones automáticas que conecta publicaciones de redes sociales (Instagram/TikTok) con Discord utilizando **Node.js**, **Express** y **Make.com**, alojado en una infraestructura de alto rendimiento en **Oracle Cloud**.

## 🚀 Características
- **Recepción de Webhooks**: Escucha peticiones POST en el puerto 3000.
- **Automatización**: Integración con Make.com para detectar nuevos posts.
- **Persistencia**: Gestión 24/7 con **PM2** para evitar caídas del servicio.
- **Seguridad**: Uso de variables de entorno para proteger credenciales y tokens.

---

## 🛠️ Tecnologías
- **Entorno**: Node.js v20+
- **Framework Web**: Express.js
- **Librería de Bot**: Discord.js v14
- **Servidor**: Ubuntu 24.04 LTS (Oracle Cloud Infrastructure)
- **Automatización**: Make (Integromat)

---

## 📖 Tutorial de Funcionamiento

**1. Flujo del sistema**
* **Detección**: Make.com monitorea las RRSS cada 15 minutos.
* **Envío**: Se envía una solicitud POST a la IP del servidor por el puerto 3000.
* **Procesamiento**: Node.js y PM2 validan y procesan los datos entrantes.
* **Notificación**: El bot envía el mensaje formateado al canal de Discord configurado.

**2. Configuración del archivo .env**
Crea un archivo llamado `.env` en la raíz del proyecto para definir las variables de entorno:

```env
TOKEN=tu_token_de_discord_aqui
CANAL_ID=id_del_canal_aqui
PORT=3000

```

---

## 💻 Instalación e inicio (Bash)

Ejecuta estos comandos en la terminal de tu servidor para preparar el área de trabajo e iniciar el bot:

```bash
# Instalar dependencias
npm install

# Iniciar el bot con PM2
pm2 start index.js --name "miau-social-bot"

# Configurar reinicio automático tras fallos del sistema
pm2 save

```

---

## ⚙️ Configuración en Make.com

* Crea un escenario para vigilar las redes sociales deseadas.
* Añade un módulo **HTTP (Make a request)** hacia: `http://TU_IP:3000/webhook`.
* El cuerpo (body) de la petición debe contener los campos: `plataforma`, `enlace` y `mensaje`.

---

## 📩 Contacto

Si tienes dudas o quieres contactarme para proyectos, puedes encontrarme en:

* **Discord**: exilraizen
* **LinkedIn**: [Italo Antonio Campodonico Miranda](https://www.linkedin.com/in/italo-antonio-campodonico-miranda-236b6b323/)
