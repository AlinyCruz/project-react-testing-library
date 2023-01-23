import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWhitRouter from '../renderWithRouter';
import App from '../App';

describe(' Teste o componente Pokemon.js', () => {
  it('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWhitRouter(<App />);
    const img = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(img).toBeInTheDocument();

    expect(img.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');

    expect(img.alt).toBe('Pikachu sprite');

    const name = screen.getByTestId('pokemon-name');
    const tipo = screen.getByTestId('pokemon-type');
    const peso = screen.getByTestId('pokemon-weight');

    expect(name).toHaveTextContent('Pikachu');
    expect(tipo).toHaveTextContent('Electric');
    expect(peso).toHaveTextContent('Average weight: 6.0 kg');
  });

  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon.', () => {
    renderWhitRouter(<App />);
    const link = screen.getByRole('link', { name: /more details/i });
    expect(link).toHaveAttribute('href', '/pokemon/25');
  });

  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWhitRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    expect(history.location.pathname).toBe('/pokemon/25');
  });

  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    renderWhitRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    userEvent.click(screen.getByRole('checkbox', { name: 'Pokémon favoritado?' }));
    const img = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(img).toBeInTheDocument();
    expect(img.src).toBe('http://localhost/star-icon.svg');
    expect(img.alt).toBe('Pikachu is marked as favorite');
  });
});
