<template>
  <ui-table
    v-model="selectedRows"
    fullwidth
    :data="items"
    :thead="thead"
    :tbody="tbody"
    row-checkbox
    selected-key="id"
  >
    <template #dessert="{ items }">
      <div class="dessert">{{ items }}</div>
    </template>
    <template #actions="{ data }">
      <ui-icon @click="show(data)">description</ui-icon>
      <ui-icon @click="show(data)">edit</ui-icon>
      <ui-icon @click="show(data)">delete</ui-icon>
    </template>

    <ui-pagination
      v-model="page"
      :total="total"
      show-total
      @click="$emit('pageChange', page)"
    ></ui-pagination>
  </ui-table>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  items: Array<any>;
}
defineProps<Props>();

const show = (data: any) => {
  console.log(data);
};

const thead = ["id", "first name", "last name", "email", "Actions"];
const tbody = [
  {
    fn: ({ employeeId }: { employeeId: number }) => {
      return employeeId - 100 + 1;
    },
    class: "red",
  },
  "firstName",
  "lastName",
  "email",
  { slot: "actions" },
];

const selectedRows = [1, 2, 4];
const page = ref(1);
const total = 12;
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
