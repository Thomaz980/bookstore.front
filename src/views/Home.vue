<script setup>
import Session from '../components/Session.vue';

</script>

<template>
  <div class="welcome-container">
    <div>
      <nav class="navbar">
        <div class="logo">
          <img id="logo" src="/public/logo-livro.png" alt="Logo" />
        </div>
        <ul class="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#inicio">Compras</a></li>
          <li><a href="#sobre">Ebooks</a></li>
          <li><a href="#login" id="login">Sair</a></li>
        </ul>
      </nav>
    </div>

    <main>
      <div class="title">
        <h1>Milhares de</h1>
        <h1>Títulos</h1>
      </div>

      <div class="capa">
        <img id="capa" src="/public/home.png" alt="Capa do livro" />
      </div>
    </main>

      <div>
        <div>
          <Session 
            title="Harry Potter:"
            color="#D8A25E"
            :data="[
              { id: 1, title: 'Pedra Filosofal', capa: '/public/livros/hp1.png' },
              { id: 2, title: 'Câmara Secreta', capa: '/public/livros/hp2.png' },
              { id: 3, title: 'Prisioneiro de Azkaban', capa: '/public/livros/hp3.png' },
              { id: 4, title: 'Cálice de Fogo', capa: '/public/livros/hp4.png' },
              { id: 5, title: 'Ordem da Fênix', capa: '/public/livros/hp5.png' },
            ]"
          />
          <Session 
            title="Desenvolvimento de Software:"
            color="#2BCD4E"
            :data="[
              { id: 1, title: 'Pedra Filosofal', capa: '/public/livros/hp1.png' },
              { id: 2, title: 'Câmara Secreta', capa: '/public/livros/hp1.png' },
              { id: 3, title: 'Prisioneiro de Azkaban', capa: '/public/livros/hp1.png' },
              { id: 4, title: 'Cálice de Fogo', capa: '/public/livros/hp1.png' },
              { id: 5, title: 'Ordem da Fênix', capa: '/public/livros/hp1.png' },
            ]"
          />
      </div>
    </div>
  </div>
</template>

<style scoped>

.welcome-container {
  background-color: #1ECEA4;
  width: 100vw;
  height: 100vh; 
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
  font-size: 1.2rem;
  font-weight: bold;
  margin-left: 2rem;
  width: 50%;
}

.capa {
  width: 450px;
  height: 450px;
}

#capa {
  width: 550px;
  height: 450px;
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
  background-color: #EE5F5F;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}


.livro {
  width: 100px;
  height: 100px;
}


</style>