<template>
  <div>{{ setEvenNumber }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberRender",
  props: {
    even: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    setEvenNumber() {
      const evens = [];
      const odds = [];

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i);
        } else {
          odds.push(i);
        }
      }

      return this.even === true ? evens.join(", ") : odds.join(", ");
    },
  },
});
</script>
