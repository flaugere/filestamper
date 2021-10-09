import { mount } from '@vue/test-utils'
import Authentication from '@/components/Authentication.vue'

describe('Authentication', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Authentication);
  })
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })
  test('MetaMask manquant', () => {
    wrapper.findComponent({ref: 'login'}).trigger('click');
    expect(wrapper.emitted().error).toEqual([["MetaMask missing"]]);
  })
})
