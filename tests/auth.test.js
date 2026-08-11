const request = require('supertest')
const app = require('../src/app')

describe('Autenticação', () => {

  test('cadastra um usuário com sucesso', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'daniela_teste', password: 'senha123' })

    expect(response.status).toBe(201)
  })

  test('faz login com credenciais corretas', async () => {
    await request(app)
      .post('/users')
      .send({ name: 'usuario_login', password: 'minhaSenha' })

    const response = await request(app)
      .post('/users/login')
      .send({ name: 'usuario_login', password: 'minhaSenha' })

    expect(response.status).toBe(200)
    expect(response.text).toBe('Logado com sucesso')
  })

  test('rejeita login com senha incorreta', async () => {
    await request(app)
      .post('/users')
      .send({ name: 'usuario_senha_errada', password: 'senhaCerta' })

    const response = await request(app)
      .post('/users/login')
      .send({ name: 'usuario_senha_errada', password: 'senhaErrada' })

    expect(response.text).toBe('Login incorreto')
  })

  test('rejeita login de usuário inexistente', async () => {
    const response = await request(app)
      .post('/users/login')
      .send({ name: 'nao_existe', password: 'qualquer' })

    expect(response.status).toBe(400)
  })

})