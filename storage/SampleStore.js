import {
  Module,
  VuexModule,
  VuexAction,
  VuexMutation,
} from 'nuxt-property-decorator'
import { cid, container } from 'inversify-props'

@Module({
  namespaced: true,
  stateFactory: true,
  name: 'sample',
})
class SampleStore extends VuexModule {
  sampleService = container.get(cid.SampleService)
  greeting = ''

  @VuexMutation
  setGreeting(greeting) {
    this.greeting = greeting
  }

  @VuexAction({ rawError: true })
  useService() {
    this.setGreeting(this.sampleService.sayHi())
  }
}

export default SampleStore
