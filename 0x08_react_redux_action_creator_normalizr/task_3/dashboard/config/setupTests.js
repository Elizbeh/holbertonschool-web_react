import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { JSDOM } from 'jsdom';

const mockDocument = new JSDOM('<!doctype html><html><body></body></html>');
global.document = mockDocument.window.document;

configure({adapter: new Adapter() });