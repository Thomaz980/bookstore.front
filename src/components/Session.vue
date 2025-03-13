<script setup>
defineProps({
  title: String,
  data: Array,
  color: String,
});
</script>

<template>
  <main :style="{ backgroundColor: color }">
    <div class="title">
      <h1>{{ title }}</h1>
    </div>

    <div class="livros-container">
        <div class="livros">
            <div v-for="(livro, index) in data" :key="livro.id" class="livro">
                <img id="capa" :src="livro.capa" :alt="livro.title" class="capa" />
            </div>
        </div>
    </div>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh; 
  margin: 0;
}

.livros-container {
  display: flex;
  justify-content: center; 
  width: 100%;
}

.livros {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center; 
  width: 100%;
  max-width: 60rem; 
}

.livro {
  text-align: center;
}

#capa {
  width: 10rem;
  height: auto;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  width: 100vh;
}

.title h1 {
  width: 100vh;
}

.livros {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;
  width: 60rem;
}

.capa {
  width: 150px;
  height: auto;
  border-radius: 5px;
}
</style>
