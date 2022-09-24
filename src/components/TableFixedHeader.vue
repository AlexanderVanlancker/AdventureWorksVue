<template>
  <v-table fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Calories</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.name">
        <td>{{ item }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup lang="ts">
interface Props {
  items: Array<any>;
}
defineProps<Props>();
console.log();
</script>

<style lang=""></style>
