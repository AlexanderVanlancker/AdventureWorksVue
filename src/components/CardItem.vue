<template>
  <div class="card">
    <img
      src="https://i.pinimg.com/736x/89/90/48/899048ab0cc455154006fdb9676964b3.jpg"
      alt="Avatar"
      style="width: 100%"
    />
    <div class="container">
      <h4>
        <b>{{ name }}</b>
      </h4>
      <p>{{ price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  price?: number;
}

defineProps<Props>();
</script>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 150px;
  height: 200px;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>
