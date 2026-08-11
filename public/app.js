document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const name = document.getElementById('loginName').value
  const password = document.getElementById('loginPassword').value

  const response = await fetch('/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password })
  })

  const texto = await response.text()
  document.getElementById('loginMensagem').textContent = texto
})

document.getElementById('cadastroForm').addEventListener('submit', async (e) => {
  e.preventDefault()

  const name = document.getElementById('cadastroName').value
  const password = document.getElementById('cadastroPassword').value

  const response = await fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, password })
  })

  const mensagem = document.getElementById('cadastroMensagem')
  if (response.status === 201) {
    mensagem.textContent = 'Usuário cadastrado com sucesso!'
    document.getElementById('cadastroForm').reset()
  } else {
    mensagem.textContent = 'Erro ao cadastrar usuário.'
  }
})