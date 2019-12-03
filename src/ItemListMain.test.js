import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemListMain from './ItemListMain'

describe(`ItemListMain component`, () => {
  it('renders a .ItemListMain by default', () => {
    const wrapper = shallow(<ItemListMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it.skip('renders Item in ul for each item in array', () => {
    const props = {
      match: {
        params: {
          categoryid: 'THIS_CATEGORY_ID'
        }
      }
    }
    const context = {
      items: [
        {
          "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "fish",
          "categoryid": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        
        },
        {
          "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "cherries",
          "categoryid": "THIS_CATEGORY_ID",
    
        },
        {
          "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "canned soup",
          "categoryid": "THIS_CATEGORY_ID",
         
        },
        {
          "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "Peas",
          "categoryid": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
         
        },
      ]
    }
    const ul = shallow(<ItemListMain {...props} />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
