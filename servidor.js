const http = require('http');

console.log("Hola mundo");

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
            <head>
                <style>
                    body {
                        background-color: lightblue;
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        text-align: center;
                        color: white;
                        background-color: darkblue;
                        padding: 20px;
                        margin: 0;
                    }
                    .navbar {
                        width: 100%;
                        background-color: #333;
                        overflow: hidden;
                    }
                    .navbar a {
                        float: left;
                        display: block;
                        color: white;
                        text-align: center;
                        padding: 14px 16px;
                        text-decoration: none;
                    }
                    .navbar a:hover {
                        background-color: #ddd;
                        color: black;
                    }
                </style>
            </head>
            <body>
                <h1>ASOPROS</h1>
                <div class="navbar">
                    <a href="#inicio">Inicio</a>
                    <a href="#mision">Mision</a>
                    <a href="#vision">Vision</a>
                    <a href="#galeria">Galeria</a>
                    <a href="#videos">Videos Informativos</a>
                    <a href="#productos">Productos en Venta</a>
                    <a href="#certificaciones">Certificaciones</a>
                    <a href="#contacto">Contacto de Venta</a>
                    
                </div>
            </body>
        </html>
    `);
});

// Asignación de puerto y hacer que el servidor escuche en ese puerto
const port = 3000;
server.listen(port, () => {
    console.log(`El servidor está escuchando en http://localhost:${port}`);
});
