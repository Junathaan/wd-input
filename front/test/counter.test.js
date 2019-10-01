import { mount } from '@vue/test-utils'
import App from '../src/App.vue'
const value = 5

describe('WdInput.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = mount(App)
    wrapper.setData({ value })

    const button = wrapper.find('button.tw-primary')
    button.trigger('click')

    expect(wrapper.vm.value).toBe((value + 1))
  })
  it('decrements count when button is clicked', () => {
    const wrapper = mount(App)
    wrapper.setData({ value })

    const button = wrapper.find('button.tw-danger')
    button.trigger('click')

    expect(wrapper.vm.value).toBe((value - 1))
  })
})
