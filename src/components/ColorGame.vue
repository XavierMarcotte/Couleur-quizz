<script setup>
import { ref, onMounted } from "vue";
import color from "../data/color.js";
import Header from "./Header.vue";
import { useRouter } from "vue-router";

const selectedColors = ref(color);
const randomColor = ref("");
const message = ref("");
const messageType = ref("");
const displayedColors = ref([]);
const router = useRouter();

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * selectedColors.value.length);
  randomColor.value = selectedColors.value[randomIndex];
  const filteredColors = selectedColors.value.filter(
    (c) =>
      c.main === randomColor.value.main && c.name !== randomColor.value.name
  );
  const additionalColors = filteredColors
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  displayedColors.value = [...additionalColors, randomColor.value].sort(
    () => Math.random() - 0.5
  );
};
const handleColorClick = (color) => {
  if (color.hue === randomColor.value.hue) {
    message.value = "Correcte! Vous avez trouvé la bonne couleur.";
    messageType.value = "success";
  } else {
    message.value = `Faux, ce n'est pas la bonne couleur. Vous avez sélectionné : ${color.name}.`;
    messageType.value = "error";
  }
};

onMounted(() => {
  getRandomColor();
});

const reloadPage = () => {
  router.push("/").then(() => {
    router.replace("/color");
  });
};
</script>

<template>
  <section class="section-container">
    <div class="color-container">
      <p>Quelle est la couleur associée à ce nom :</p>
      <div v-if="randomColor" class="color-box">
        <p>{{ randomColor.name }}</p>
      </div>
    </div>
    <div class="button-grid">
      <button
        v-for="(color, index) in displayedColors"
        :key="index"
        class="color-button"
        :style="{ backgroundColor: color.hue }"
        @click="handleColorClick(color)"
      ></button>
    </div>
    <p
      v-if="message"
      :class="messageType === 'success' ? 'message-success' : 'message-error'"
    >
      {{ message }}
    </p>
    <button class="reload-button" type="button" @click="reloadPage">
      Une autre ?
    </button>
  </section>
</template>

<style scoped>
.section-container {
  min-width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
}
.color-container {
  margin: auto;
  text-align: center;
  min-width: 80%;
}

.color-box {
  min-width: 10rem;
  margin: 1rem auto;
  font-weight: bold;
}

.button-grid {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  height: 8rem;
  min-width: 80%;
}

.color-button {
  border: 2px solid black;
  border-radius: 1rem;
  width: 80%;
  height: 80%;
  min-width: 6rem;
  margin: auto;
  background-color: white;
  cursor: pointer;
  text-align: center;
}

.color-button:hover {
  background-color: #f0f0f0;
}

.message-success {
  margin-top: 1rem;
  text-align: center;
  color: green;
}

.message-error {
  margin-top: 1rem;
  text-align: center;
  color: red;
}

.reload-button {
  padding: 0.5rem 1rem;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  width: 15rem;
  margin: 3rem auto;
}

@media (max-width: 768px) {
  .reload-button {
    width: 66.67%;
    margin: 2rem auto;
  }
}

.reload-button:hover {
  background-color: #f0f0f0;
}
</style>
