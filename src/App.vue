<script setup lang="ts">
import ScrollAndFadeText from "../dist/scroll-and-fade-text";
import "../dist/style.css";
</script>

<template>
  <div class="scrolling-container">
    <ScrollAndFadeText
      text="a really long string that is repeatedly scrolling and fading"
    />
  </div>
</template>

<style scoped>
.scrolling-container {
  display: flex;
  align-items: center;
  width: 10rem;
  padding: 1rem;
  background-color: bisque;
  color: black;
}
</style>
