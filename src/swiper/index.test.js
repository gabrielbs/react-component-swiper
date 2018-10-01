import React from 'react'
import ComposedComponentSwiper, { ComponentSwiper } from './index'
import { shallow, mount } from 'enzyme'

test('should render without errors', () => {
  const swiper = (
    <ComposedComponentSwiper data={[
      <div />,
      <div />,
      <div />
    ]} />
  )
  
  shallow(swiper)
})

describe('Testing the elements of navigation', () => {
  const wrapper = mount(
    <ComposedComponentSwiper
      data={[
        <div />,
        <div />,
        <div />
      ]}
      arrowLeft={(state) => (
        <a href="#" onClick={() => state.goPrev()}>goPrev</a>
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

  test('handle goNext event', () => {
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(0);
    wrapper.find('.c-swippernext button').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(1);
  })

  test('handle goPrev event', () => {
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(1);
    wrapper.find('.c-swipperprev a').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(0);
  })

  test('handle goPrev event on index 0', () => {
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(0);
    wrapper.find('.c-swipperprev a').at(0).simulate('click');
    wrapper.update();
    expect(wrapper.find(ComponentSwiper).props().index).toEqual(0);
  })
})
