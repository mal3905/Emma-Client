import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemListNav from '../ItemListNav/ItemListNav'

describe(`ItemListNav component`, () => {
  it('renders a .ItemListNav by default', () => {
    const wrapper = shallow(<ItemListNav />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // skipped bc : enzyme doesn't test React.createContext
  it.skip('renders link in ul for each category in array', () => {
    const context = {
      items: [
        {
          "id": "cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "cherries",
          "categoryid": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",

        },
        {
          "id": "d26e0034-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "fish",
          "categoryid": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1"
        },
        {
          "id": "d26e01a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "steak",
          "categoryid": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1"

        },
        {
          "id": "d26e0570-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "sushi",
          "categoryid": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
        },
      ],
      category: [
        {
          "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "fridge"
        },
        {
          "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
          "name": "pantry"
        }
      ]
    }
    const ul = shallow(<ItemListNav />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})
