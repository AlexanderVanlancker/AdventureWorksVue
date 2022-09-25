<template>
  <main>
    <Suspense>
      <DataTable :items="state" @page-change="handlePagechange" />
    </Suspense>
    <ui-alert state="success">Success Message</ui-alert>

    <p>test</p>
  </main>
</template>

<script setup lang="ts">
import axios from "axios";
import { computed, reactive, ref } from "vue";
import DataTable from "../components/DataTable.vue";

const customersResponse = await axios.get<any>(
  "https://localhost:7294/api/Employee"
);
const allCustomers: Array<any> = customersResponse.data;

const page = ref(1);
const state = computed(() =>
  allCustomers?.slice((page.value - 1) * 10, page.value * 10)
);

const handlePagechange = (pagenr: any) => {
  page.value = pagenr;
  console.log(state.value);
};
</script>
