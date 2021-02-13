import Vuex from 'vuex'
import { getModule } from 'nuxt-property-decorator'
import { inject } from 'inversify-props'
import SampleStore from './SampleStore'

export class StoreCreator {
  store = null
  makeStore() {
    if (!this.store) {
      this.store = new Vuex.Store({
        modules: {
          sample: SampleStore,
        },
      })
    }
    return this.store
  }
}

export class Storage {
  @inject('StoreCreator') storeCreator

  getStores() {
    const store = this.storeCreator.makeStore()
    return { sampleStore: getModule(SampleStore, store) }
  }
}
