<script setup lang="ts">
import { useChat } from "@ai-sdk/vue";

const { status, messages, input, handleSubmit } = useChat({});
const editor = ref<HTMLDivElement>();

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSubmit();
  }
};
</script>

<template>
  <main class="flex flex-col justify-center items-center">
    <div
      class="flex justify-center items-center w-full max-w-[700px] p-2 relative"
    >
      <div
        v-if="messages.length > 0"
        class="rounded-md p-6 text-white flex flex-col gap-6 pt-10 pb-40 w-full"
      >
        <div
          v-for="(m, index) in messages"
          :id="`chat-bubble-${index}`"
          :key="m.id ? m.id : index"
        >
          <ChatBubble :message="m" :status="status" />
        </div>
      </div>
      <div
        v-else
        class="absolute text-center text-gray-400 h-lvh flex items-center justify-center top-0 left-0 right-0 bottom-0"
      >
        <p>Ask me anything about John Long.</p>
      </div>
    </div>
    <div
      class="flex items-center justify-end w-full max-w-[700px] p-2 py-10 fixed bottom-0 bg-slate-900/90 backdrop-blur-sm"
    >
      <form
        class="w-full h-full max-h-[300px] bg-slate-500/20 flex rounded-md"
        @submit="handleSubmit"
      >
        <textarea
          ref="editor"
          v-model="input"
          placeholder="Ask me anything about John Long..."
          class="focus:outline-none w-full h-full rounded-md p-4 text-white appearance-none field-sizing-content max-h-[190px] resize-none"
          @keydown="handleKeyDown"
        />
      </form>
    </div>
  </main>
</template>
