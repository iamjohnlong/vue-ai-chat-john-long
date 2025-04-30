<template>
  <div
    class="flex flex-col gap-3 leading-relaxed"
    v-html="markdown.render(source)"
  />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();
defineProps({
  source: {
    type: String,
    default: "",
  },
});
</script>
