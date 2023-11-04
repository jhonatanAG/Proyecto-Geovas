


import express from 'express';
import cors from 'cors'
import {PORT} from "./config.js";

import indexRoutes from "./routes/index.routes.js";
import stockRoutes from "./routes/stock.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";



const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(stockRoutes);
app.use(empleadosRoutes);

app.listen(PORT)
console.log('Server is LISTENING on port '+ PORT);
