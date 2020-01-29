import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Form from '../Form/Form'

describe(`Form component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.Form by default', () => {
    const wrapper = shallow(<Form />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the Form given props', () => {
    const wrapper = shallow(<Form {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
