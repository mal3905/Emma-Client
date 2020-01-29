import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Category from '../Category/Category'

describe(`AddItemForm component`, () => {
  it('renders the complete form', () => {
    const wrapper = shallow(<Category />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
