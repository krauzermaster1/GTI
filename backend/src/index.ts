import express from "express";
const app = express();
import "dotenv/config";


const TOKEN_SERVER = process.env.TOKEN_SERVER;

// ROTAS PUBLICAS
import publicRoutes from "./routes/public.routes";
app.use("/", publicRoutes);

// ROTAS PRIVADAS
import privateRoutes from "./routes/user.routes";
app.use("/user", privateRoutes);

// ROTAS ADMINISTRADOR
import adminRoutes from "./routes/admin.routes";
app.use("/admin", adminRoutes);

app.listen(TOKEN_SERVER, () => {
    console.log(`Server Runing... 'http://localhost:${TOKEN_SERVER}'`);
});
