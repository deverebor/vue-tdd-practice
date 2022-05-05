<template>
  <div>
    {{ greeting }}
  </div>
</template>

<script>
export default {
  name: "HomeGreetings",

  data() {
    return {
      greeting: "Vue and TDD",
    };
  },
};
</script>
