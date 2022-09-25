<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
UIkit.use(Icons);
</script>

<template>
  <header>
    <div id="navbar">
      <ul>
        <li><a href="http://github.com">Link 1</a></li>
        <li><a href="http://github.com">Link 2</a></li>
        <li><a href="http://github.com">Link 3</a></li>
        <li><a href="http://github.com">Link 4</a></li>
        <li><a href="http://github.com">Link 5</a></li>
      </ul>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style>
#navbar ul {
  margin: 0;
  padding: 5px;
  list-style-type: none;
  text-align: center;
  background-color: #000;
}

#navbar ul li {
  display: inline;
}

#navbar ul li a {
  text-decoration: none;
  padding: 0.2em 1em;
  color: #fff;
  background-color: #000;
}

#navbar ul li a:hover {
  color: #000;
  background-color: #fff;
}
</style>
