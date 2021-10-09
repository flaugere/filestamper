import { mount } from '@vue/test-utils'
import Account from '@/components/Account.vue'

describe('Account', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Account)
    expect(wrapper.vm).toBeTruthy()
  })
})
