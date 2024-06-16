import express from "express";

import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

//Importacion de la Ruta que se usara!
import indexRoutes from './routes/index.routes.js'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname,'views')); // Ruta Absoluta
app.set('view engine', 'ejs') // Configuramos el motor de vista. "ESTO SOLO PORQUE USAMOS EL MODULO EJS"


//routes
app.use(indexRoutes)

app.use(express.static(join(__dirname, 'public'))) //  <- Le configuramos el CSS 

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on Port:${PORT}`)
})