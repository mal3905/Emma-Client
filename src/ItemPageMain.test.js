import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ItemPageMain from './ItemPageMain'
import renderer from 'react-test-renderer';
import MyContext from './MyContext';


const context = {
    items: [{
      id: `1`,
      name: `peas`

    }]
  }

describe(`ItemPageMain component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ItemPageMain />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

  it('renders the UI as expected', () => {
    const tree = renderer
        .create(<MyContext.Provider value={context}><MyContext/><ItemPageMain/></MyContext.Provider>)
        .toJSON();
    expect(tree).toMatchSnapshot();
  })

  // enzyme doesn't do React context
  it.skip('renders an item  with item prop', () => {
    const props = {
      match: {
        params: {
          itemid: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
        }
      }
    }

    const item = shallow(<ItemPageMain {...props} />, context)
      .find('Item')
    expect(toJson(item)).toMatchSnapshot()
  })

  })
