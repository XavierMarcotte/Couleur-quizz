<template>
  <section class="section-container">
    <router-link class="main-link" to="/">Quizz de couleur</router-link>
    <div class="links-container">
      <router-link class="button-link" to="/name">
        Devinez le nom de la couleur
      </router-link>
      <router-link class="button-link" to="/color">
        Devinez la couleur à partir du nom
      </router-link>
    </div>
  </section>
</template>

<script></script>

<style scoped>
.section-container {
  margin-top: 2rem;
  text-align: center;
  min-width: 50%;
}

.main-link {
  font-size: 2rem;
  text-decoration: none;
  color: inherit;
}

.links-container {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
}

.button-link {
  margin: 0.5rem 0;
  font-size: 1.25rem;
  border: 2px solid black;
  padding: 1rem;
  border-radius: 1rem;
  text-decoration: none;
  color: inherit;
}

@media (max-width: 768px) {
  .links-container {
    flex-direction: column;
    margin: 0 1rem;
  }

  .button-link {
    font-size: 1rem;
    margin: 1rem 0;
  }
}
</style>
