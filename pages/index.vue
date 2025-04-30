<script setup lang="ts">
import { useChat } from "@ai-sdk/vue";

const { status, messages, input, handleSubmit } = useChat({
  initialMessages: [
    {
      id: "1",
      role: "user",
      content:
        "Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: "2",
      role: "assistant",
      content:
        "Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.Hello, how are you? Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos. Ipsum lorem dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
  ],
});
const editor = ref<HTMLDivElement>();

const handleKeyDown = (event: KeyboardEvent) => {
  console.log(event);
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSubmit();
  }
};

console.log(status, messages);
</script>

<template>
  <main class="flex flex-col justify-center items-center h-screen bg-slate-900">
    <div
      class="flex justify-center items-center h-full w-full max-w-[700px] p-2"
    >
      <div
        class="bg-slate-200/2 w-full h-screen rounded-md p-6 text-white flex flex-col gap-6 overflow-y-auto py-20"
      >
        <div
          v-for="(m, index) in messages"
          :id="`chat-bubble-${index}`"
          :key="m.id ? m.id : index"
        >
          <ChatBubble :message="m" :status="status" />
        </div>
      </div>
    </div>
    <div class="flex items-center justify-end w-full max-w-[700px] p-2 my-3">
      <form class="w-full h-full max-h-[300px]" @submit="handleSubmit">
        <textarea
          ref="editor"
          v-model="input"
          placeholder="Say something..."
          class="w-full h-full bg-slate-200/10 rounded-md p-4 text-white appearance-none field-sizing-content"
          @keydown="handleKeyDown"
        />
      </form>
    </div>
  </main>
</template>
