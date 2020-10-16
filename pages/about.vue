<template>
  <h1>About</h1>
</template>

<script>
  export default {
    data() {
      return {
        title: 'About'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'Japan Proxy'
          }
        ]
      }
    }
  }
</script>