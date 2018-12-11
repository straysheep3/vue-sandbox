<template>
    <div>
        {{ max }}
    </div>
</template>

<script>
export default {
  name: "Greeting",
  data() {
    return {
      greeting: "Vue without TDD",
      test: "sample",
      sample: "test"
    };
  },
  computed: {
    max: () => 5
  }
};
</script>
