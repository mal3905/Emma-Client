import React from 'react';
// import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageMain from '../ItemPageMain/ItemPageMain'
import MyContext from '../contexts/MyContext'
import renderer from 'react-test-renderer'

const context = {
    items: [{
      id: `cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1`,
      name: `Dogs`
    }]
  }
  
  const match = {params: {itemid: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'}}


describe(`ItemPageMain component`, () => {
   
    it('renders a .ItemPageMain by default', () => {
    const tree = renderer 
    .create(<MyContext.Provider value={context}>
        <ItemPageMain match = {match} />
    </MyContext.Provider>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  })

  // enzyme doesn't yet support React.createContext
  it.skip('renders a Item with note prop', () => {
    const props = {
      match: {
        params: {
          itemId: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }
   
    const item = 
    (<ItemPageMain {...props} />, context)
      .find('Item')
    expect(toJson(item)).toMatchSnapshot()
  })

  })


