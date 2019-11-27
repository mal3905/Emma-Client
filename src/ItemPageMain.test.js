import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageMain from './ItemPageMain'

describe(`ItemPageMain component`, () => {
  it('renders a .ItemPageMain by default', () => {
    const wrapper = shallow(<ItemPageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // enzyme doesn't yet support React.createContext
  it('renders a Item with note prop', () => {
    const props = {
      match: {
        params: {
          itemId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }
    const context = {
      items: [{
        id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
        name: `Dogs`
      }]
    }
    const item = shallow(<ItemPageMain {...props} />, context)
      .find('Item')
    expect(toJson(item)).toMatchSnapshot()
  })

  })


