<script setup lang="ts">
import type { Message } from "ai";

const props = defineProps<{
  message: Message;
  streaming: boolean;
}>();
</script>

<template>
  <div
    class="flex"
    :class="{
      'justify-end': props.message.role === 'user',
    }"
  >
    <div
      class="flex p-5 bg-slate-200/10 rounded-xl"
      :class="{
        'bg-slate-200/10 ml-12': props.message.role === 'user',
        'bg-slate-200/20 mr-12': props.message.role === 'assistant',
        'animate-pulse': props.streaming,
      }"
    >
      <div v-for="(part, partIndex) in props.message.parts" :key="partIndex">
        <div v-if="part.type === 'text'">
          <MarkDown :source="part.text" />
        </div>
      </div>
    </div>
  </div>
</template>
