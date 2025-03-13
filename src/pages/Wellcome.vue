<script>
export default {
  name: 'Wellcome'
}
</script>

<template>
  <div>
    <nav class="navbar">
      <div class="logo">Logo</div>
      <ul class="nav-links">
        <li><a href="#inicio">Início</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  </div>

  

</template>

<style>
html, body, #app {
  height: 100%;
  margin: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
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

#app > div {
  height: 100%;
}
</style>