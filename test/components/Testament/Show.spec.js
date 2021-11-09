import { mount } from '@vue/test-utils'
import Show from '@/components/Testament/Show.vue'

describe('Testament/Show', () => {
  let wrapper;
  const timestampHash = '0x152634156496496749';
  const stamper = () => {
    return {
      get: jest.fn(() => { return new Promise((resolve) => { resolve(timestampHash) }) })
    }
  };
  const store = {
    state: {},
    commit: () => { }
  }
  wrapper = mount(Show, {
    mocks: {
      $stamper: stamper, $store: store
    },
    stubs: {
      NuxtLink: true
    }
  });

  test('No timestamp found', async () => {
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent({ ref: 'link' }).exists()).toBeFalsy();
  })

  test('New address', async () => {
    store.state.account = {
      address: 'address'
    };

    wrapper = mount(Show, {
      mocks: {
        $stamper: stamper, $store: store
      },
      stubs: {
        NuxtLink: true
      }
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toMatch(timestampHash);
    expect(wrapper.findComponent({ ref: 'link' }).exists()).toBeTruthy();
  })
})
