<template>
  <div
    v-editable="blok"
    class="page">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  mounted () {
    scrollTo(0,0)
  }
}
</script>

<style lang="scss" scoped>
.page {
  min-height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
</style>
