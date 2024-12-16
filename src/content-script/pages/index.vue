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

    <button
      class="btn btn-secondary"
      @click="handleClick"
    >
      Secondary Daisy UI Button
    </button>

    <button
      class="btn"
      @click="handleClick"
    >
      Red Daisy UI Button
    </button>
  </div>
</template>

<style scoped></style>
