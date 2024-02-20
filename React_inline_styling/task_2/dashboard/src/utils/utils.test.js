import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

// Test for getfullYear
test('getFullYear  should return the current year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});

// test for getFooterCopy
test('getFooterCopy should return correct string when true is passed', () => {
  const result = getFooterCopy(true);
  expect(result).toBe('Holberton School');
});

test('getFooterCopy should return correct string when false is passed', () => {
  const result = getFooterCopy(false);
  expect(result).toBe('Holberton School main dashboard');
});

// Test for getLatestNotification
test('getLatestNotification should return the correct string', () => {
  const expectedString = '<strong>Urgent requirement</strong> - complete by EOD';
  expect(getLatestNotification()).toBe(expectedString);
});