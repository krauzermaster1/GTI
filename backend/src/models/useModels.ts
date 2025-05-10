// MODELO DE DADOS

export const userModel = `
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) DEFAULT 'Walison Lima',
    email VARCHAR(255) DEFAULT 'usuario@email.com',
    password VARCHAR(255) DEFAULT 'apenas123#',
    token_perfil VARCHAR(255) DEFAULT 'sd56fhj8'
);
`