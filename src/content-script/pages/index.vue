<script setup lang="ts">
function handleClick() {
  console.log(chrome.runtime)
  alert('chrome.runtime is available in content script')
}
</script>

<template>
  <div>
    <h1 class="text-blue-600 font-bold text-xl">Content Script Body</h1>
    <button
      class="btn btn-primary"
      @click="handleClick"
    >
      Primary Daisy UI Button
    </button>

    <hr />

    <button class="btn">Button</button>
    <button class="btn btn-neutral">Neutral</button>
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-accent">Accent</button>
    <button class="btn btn-ghost">Ghost</button>
    <button class="btn btn-link">Link</button>
  </div>
</template>

<style scoped></style>
