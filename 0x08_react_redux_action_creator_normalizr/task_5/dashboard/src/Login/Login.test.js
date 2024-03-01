import Login from "./Login";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Login />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('it renders Login without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  })

  it('it renders imgnand H1 tags', () => {
    expect(wrapper.find('input')).toHaveLength(3);
    expect(wrapper.find('label')).toHaveLength(2);
  })

  it('submit button is disabled by default', () => {
    const button = wrapper.find('input[type="submit"]');
    expect(button.prop('disabled')).toEqual(true);
  })

  it('renders input button enabled when email and password are not empty', () => {
    const email = wrapper.find('#email');
    const password = wrapper.find('#password');

    email.simulate('change', { target: { name: email, value: '3685@holbertonstudents.com' } });
    let button = wrapper.find('input[type="submit"]');
    expect(button.prop('disabled')).toEqual(true);

    password.simulate('change', { target: { name: password, value: 'azerty' } });
    button = wrapper.find('input[type="submit"]');
    expect(button.prop('disabled')).toEqual(false);
  });
})