<template>
  <main>
    <!-- <p v-for="product in products" :key="product.id">
      <CardItem :name="product.name" :price="product.price" />
    </p> -->
    <Card></Card>
    <p>test</p>
  </main>
</template>

<script setup lang="ts">
import CardItem from "@/components/CardItem.vue";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
}

// const products = productsResponse.data;
// const productsResponse = await axios.get<Array<Product>>(
//   "http://localhost:4249/api/Product"
// );
// const products = productsResponse.data;
</script>
