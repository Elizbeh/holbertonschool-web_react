import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('it renders Header without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  })
})

describe('<Header />', () => {
  it('it renders imgnand H1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h1')).toHaveLength(1);
  })
})