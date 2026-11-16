-- BANCO DA BIBLIOTECA

-- CRIAR O BANCO
CREATE DATABASE db_biblioteca;

-- UTILIZE O BANCO 
USE db_biblioteca;

-- CRIAR AS TABELAS

-- TABELA LEITOR
CREATE TABLE tb_leitor(
	id_leitor INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(15),
    telefone VARCHAR(15),
    email VARCHAR(100)
);

-- TABELA LIVRO
CREATE TABLE tb_livros(
	id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(100),
    ano_publicacao DATE,
    genero VARCHAR(100),
    esta_disp TINYINT
);

-- TABELA EMPRÉSTIMO
CREATE TABLE tb_emprestimo(
	id_emprestimo INT PRIMARY KEY AUTO_INCREMENT,
    dt_emprestimo DATE,
    dt_previsao_dev DATE,
    dt_devolucao DATE,
    leitor INT,
    livro INT,
    -- CHAVES ESTRANGEIRAS
    FOREIGN KEY (leitor) REFERENCES tb_leitor(id_leitor),
    FOREIGN KEY (livro) REFERENCES tb_livros(id_livro)
);


-- INSERIR INFORMAÇÕES
-- leitores
INSERT INTO 
	tb_leitor(nome, cpf, telefone, email)
VALUES 
	("Cristiano", "777", "7777", "cris@gmail.com"),
	("Ronaldo", "777", "7777", "ronaldo@gmail.com"),
	("Neymar", "5234", "123456789", "neymar@gmail.com");

-- livros
INSERT INTO 
	tb_livros(titulo, autor, ano_publicacao, genero, esta_disp)
VALUE
	("Nárnia", "Aslan", "1900-08-25", "Fantasia", 1),
    ("50 cores", "Fic", "2010-08-25", "Emoção", 1),
    ("Dicionário", "Aurélio", "1500-08-25", "Saber", 0);
    
-- empréstimos
INSERT INTO 
	tb_emprestimo(dt_emprestimo, dt_previsao_dev, dt_devolucao, leitor, livro)
VALUES
	(CURRENT_DATE(), "2026-12-12", "2026-12-13", 1,2),
    (CURRENT_DATE(), "2026-12-12", "2026-12-13", 2,3),
    (CURRENT_DATE(), "2026-12-12", "2026-12-13", 3,1);
    
    
-- EXCLUIR TABELAS
DROP TABLE tb_usuarios;

-- BUSCAR INFORMAÇÕES
SELECT * FROM tb_leitor;
SELECT * FROM tb_livros;
SELECT * FROM tb_emprestimo;

-- JOINS - JUNTAR TABELAS
SELECT *
	FROM tb_emprestimo AS emp
JOIN
	tb_leitor AS le
ON
	emp.leitor = le.id_leitor -- iguala o campo pelo nome das colunas
JOIN
	tb_livros AS li
ON
	emp.livro = li.id_livro; -- aqui também