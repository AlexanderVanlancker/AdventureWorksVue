<template>
  <div class="container">
    <v-table fixed-header height="400px">
      <thead>
        <tr>
          <th class="text-left">first name</th>
          <th class="text-left">last name</th>
          <th class="text-left">email</th>
          <th class="text-left">hire date</th>
          <th class="text-center">options</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.firstname">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.email }}</td>
          <td>{{ new Date(item.hireDate).toLocaleDateString() }}</td>
          <td class="text-center">
            <fa class="editIcon" icon="edit" />
            <fa icon="trash" />
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
interface Props {
  items: Array<any>;
}
defineProps<Props>();
</script>

<style scoped lang="scss">
svg {
  color: #6f6f6f;

  &:hover {
    color: black;
  }
  margin: 0 7px;
}
.container {
  margin-top: 2rem;
  width: 80%;
}
</style>
