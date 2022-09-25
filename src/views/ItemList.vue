<template>
  <main>
    <Suspense>
      <TableFixedHeader :items="customers" />
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";
import axios from "axios";
import TableFixedHeader from "../components/TableFixedHeader.vue";

interface Product {
  id: number;
  name: string;
  price: number;
}
// const productsResponse = await axios.get<Array<Product>>(
//   "http://localhost:4249/api/Product"
// );
// const products = productsResponse.data;
const customersResponse = await axios.get<any>(
  "https://localhost:7294/api/Employee"
);
const customers: Array<any> = customersResponse.data;
console.log(customers);
</script>
