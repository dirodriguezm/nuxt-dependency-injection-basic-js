<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">{{ greeting }}</h1>
      <div class="links">
        <button class="button--green" @click="onClick">Hello</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'
import { cid, container } from 'inversify-props'

@Component
class Home extends Vue {
  store = container.get(cid.Storage).getStores()

  onClick() {
    this.store.sampleStore.useService()
  }

  get greeting() {
    return this.store.sampleStore.greeting || 'Hello from component'
  }
}
export default Home
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
