<script>
export default {
  name: 'Wellcome'
}
</script>

<template>
  <div class="welcome-container">
    <div>
      <nav class="navbar">
        <div class="logo">
          <img id="logo" src="/public/logo-livro.png" alt="Logo" />
        </div>
        <ul class="nav-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#login" id="login">Entrar</a></li>
        </ul>
      </nav>
    </div>

    <main>
      <div class="title">
        <h1>Imagine</h1>
        <h1>Bookstore</h1>
      </div>

      <div class="capa">
        <img id="capa" src="/public/capa.png" alt="Capa do livro" />
      </div>
    </main>
  </div>
</template>

<style scoped>

.welcome-container {
  background-color: #1ECEA4;
  width: 100vw;
  height: 100vh; 
  overflow: hidden;
}

.navbar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo {
  padding-left: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
}

#logo {
  width: 100px;
  height: 100px;
}

main {
  display: flex;
  align-items: center;
  width: 100%;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 2rem;
  width: 50%;
}

.capa {
  width: 500px;
  height: 500px;
}

#capa {
  width: 700px;
  height: 550px;
}

.nav-links {
  padding-right: 5rem;
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

#login {
  background-color: #5F65EE;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>