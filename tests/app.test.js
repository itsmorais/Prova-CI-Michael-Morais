const request = require('supertest');
const app = require('../app');

describe('Testes para o servidor Express', () => {
    test('GET / - Deve retornar a mensagem de boas-vindas', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Olá, seja bem vindo ao meu servidor Express');
    });
    
    test('GET /cap12 - Deve retornar o título do capítulo', async () => {
        const response = await request(app).get('/cap12');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('<h2> Cápitulo 12: Introdução ao Express </h2>');
    });
    
    test('POST /filmes - Deve receber e retornar os dados do filme', async () => {
        const filmeData = { titulo: 'Inception', genero: 'Sci-Fi' };
        const response = await request(app)
        .post('/filmes')
        .send(filmeData);
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Filme: Inception - Gênero;Sci-Fi, recebido...');
    });
    
    test('GET /transfere - Deve executar o middleware de log e retornar a mensagem de sucesso', async () => {
        const response = await request(app).get('/transfere');
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('OK! Valor transferido com sucesso!');
    });
    });