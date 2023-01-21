import { act, screen } from '@testing-library/react';
import renderWhitRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente NotFound', () => {
  it('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWhitRouter(<App />);

    act(() => history.push('/indefinido'));

    const page = screen.getByRole('heading', { name: /Page requested not found/i, level: 2 });

    expect(page).toBeInTheDocument();
  });

  it('Teste se a página mostra a imagem', () => {
    const { history } = renderWhitRouter(<App />);

    act(() => history.push('/indefinido'));

    const page2 = screen.getByRole('img', { name: /pikachu crying because the page requested was not found/i });

    expect(page2).toBeInTheDocument();
    expect(page2.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
