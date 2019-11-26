import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageNav from './ItemPageNav'

describe(`ItemPageNav component`, () => {
  it('renders a .ItemPageNav by default', () => {
    const wrapper = shallow(<ItemPageNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't support React.createContext
  it.skip('renders a with category name when in props', () => {
    const props = {
      match: {
        params: {
          itemid: 'item.id'
        }
      }
    }
    const context = {
      item: [{ id: 'test-item-id', categoryid: 'test-category-id' }],
      category: [{ id: 'test-category-id', name: 'pantry' }]
    }

    const h3 = shallow(<ItemPageNav {...props} />, context)
      .find('.ItemPageNav__category-name')
    expect(toJson(h3)).toMatchSnapshot()
  })
})
