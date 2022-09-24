<template>
  <main>
    <!-- <p v-for="product in products" :key="product.id">
      <CardItem :name="product.name" :price="product.price" />
    </p> -->
    <v-btn color="primary"> Normal Button </v-btn>
    <p>test</p>
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
const customersResponse = await axios.get<Array<Product>>(
  "https://localhost:7107/api/Customer"
);
const customers: Array<any> = customersResponse.data;
</script>
