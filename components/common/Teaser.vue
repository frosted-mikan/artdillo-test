<template>
  <div
    v-editable="blok"
    class="py-8 text-2xl font-bold text-center">
    {{ blok.headline }}
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
