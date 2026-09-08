import express from "express";
import tarefaRoutes from "./routes/tarefaRoutes.js";
import categoriaRoutes from "./routes/categoriaRoutes.js"
import swaggerUI from "swagger-ui-express"
import { swaggerSpec } from "./config/swagger.js";


const app = express();

app.use(express.json());


app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use(tarefaRoutes);
app.use(categoriaRoutes)

const PORTA = 3000;

app.listen(PORTA, () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});