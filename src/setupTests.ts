// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

function customMatchMedia() {
  return {
    matches: false,
    addListener: () => {},
    removeListener: () => {},
  };
}

window.matchMedia = window.matchMedia || customMatchMedia;

window.scrollTo = jest.fn();

const { warn, error } = window.console;
window.console.warn = (message: any) => {
  warn(message);
  throw message;
};

window.console.error = (message: any) => {
  error(message);
  throw message;
};
