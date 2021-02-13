import Vue from 'vue'
import Vuex from 'vuex'
import { cid, container } from 'inversify-props'

Vue.use(Vuex)

const storeCreator = container.get(cid.StoreCreator)

export default ({ app }, inject) => {
  inject('store2', storeCreator.makeStore())
}
