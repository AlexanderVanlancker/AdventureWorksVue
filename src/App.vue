<template>
  <v-app>
    <v-main>
      <Suspense>
        <router-view />
      </Suspense>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",

  data() {
    return {
      //
    };
  },
});
</script>
