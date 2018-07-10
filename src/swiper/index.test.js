import React from 'react'
import ComponentSwiper from './index'
import { shallow, mount } from 'enzyme'

test('should render without errors', () => {
  const swiper = (
    <ComponentSwiper data={[
      <div />,
      <div />,
      <div />
    ]} />
  )
  
  shallow(swiper)
})

describe('Testing the elements of navigation', () => {
  const wrapper = mount(
    <ComponentSwiper
      data={[
        <div />,
        <div />,
        <div />
      ]}
      arrowLeft={(state) => (
        <a href="#" onClick={() => state.goPrev()}>goNext</a>
      )}
      arrowRight={(state) => (
        <button onClick={() => state.goNext()}>goNext</button>
      )}
    />
  )

  test('the next element should has a button', () => {
    expect(wrapper.find('.c-swippernext button').length).toBe(1)
  })

  test('the prev element should has a anchor', () => {
    expect(wrapper.find('.c-swipperprev a').length).toBe(1)
  })
})
