import express from "express";
const router = express.Router();

import pool from "../config/database";
import { userModel } from "../models/useModels";

router.get("/", async (req, res) => {
    try {
        // Obtém uma conexão do pool
        const connection = await pool.getConnection();

        // Executa o script SQL
        await connection.execute(userModel);

        // Script SQL para criar a tabela Users se ela não existir
        connection.release();

        res.send("Tabela Users verificada ou criada com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ou executar a query:", error);
        res.status(500).send("Erro ao acessar o banco de dados.");
    }
});

export default router;
