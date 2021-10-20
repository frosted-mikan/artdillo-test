<template>
  <div
    v-editable="blok"
    class="py-8 text-2xl text-center">
    <p><span class="font-bold" v-html="blok.text"/> {user_name}</p>
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
