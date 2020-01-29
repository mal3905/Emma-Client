import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddItem from '../AddItem/AddItem'

describe(`AddItem component`, () => {
  const stubCategory = [
    {
      "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "pantry"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "name": "fridge"
    }
  ]

  it('renders the complete form', () => {
    const wrapper = shallow(<AddItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't tes fpr  React.createContext
  it.skip('renders the select options from category', () => {
    const context = { category: stubCategory }
    const select = shallow(<AddItem/>, context)
      .find('#Item-category-select')
    expect(toJson(select)).toMatchSnapshot()
  })
})
