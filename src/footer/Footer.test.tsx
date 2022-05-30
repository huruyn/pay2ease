import '../i18n/config';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

const ReactTestRenderer = require('react-test-renderer');

describe('Footer Component', () => {
  it('matches the snapshot', () => {
    const tree = ReactTestRenderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('click footer links', () => {
    const { container } = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const preventMethod = jest.fn();
    const mEvent = { preventDefault: preventMethod };

    fireEvent.click(container.querySelectorAll('.text-decoration-none')[1], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[2], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[3], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[6], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[7], mEvent);
    fireEvent.click(container.querySelectorAll('.text-decoration-none')[8], mEvent);
    expect(container.querySelectorAll('.text-decoration-none')[0]).toBeInTheDocument();
  });
});
