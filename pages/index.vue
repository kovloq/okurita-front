<template>
  <main>
    <h1>Home page</h1>
    <NuxtLink to="/about">
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <a href="https://nuxtjs.org">External Link to another page</a>
    <div v-if="$fetchState.pending">Fetching post #{{$route.params.id}}...</div>
  <div v-else>
    <h1>{{ post.title }}</h1>
    <pre>{{ post.body }}</pre>
    <p><n-link to="/">Back to posts</n-link></p>
  </div>
  </main>

</template>

<script>
  export default {
    data() {
      return {
        title: 'Index',
        posts: []
      }
    },
    // get data from URL
    async fetch() {
      this.posts = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      ).then(res =>
        res.json()
      )
    },
    fetchOnServer: false,

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