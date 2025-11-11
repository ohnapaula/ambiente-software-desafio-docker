CREATE TABLE IF NOT EXISTS usuario (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    data_criacao DATE DEFAULT CURRENT_DATE
);

INSERT INTO usuario (nome, email) VALUES
    ('Usuário de Teste 1', 'teste1@exemplo.com'),
    ('Usuário de Teste 2', 'teste2@exemplo.com')
ON CONFLICT (email) DO NOTHING;