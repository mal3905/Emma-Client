import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import EmmaForm from './EmmaForm'

describe(`EmmaForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.EmmaForm by default', () => {
    const wrapper = shallow(<EmmaForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the EmmaForm given props', () => {
    const wrapper = shallow(<EmmaForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
