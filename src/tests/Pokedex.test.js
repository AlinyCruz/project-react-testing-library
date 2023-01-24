import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWhitRouter from '../renderWithRouter';
import App from '../App';
// import { Pokedex } from '../pages';

describe('Teste o componente <Pokedex', () => {
  it('Teste se a página contém um h2 com o texto Encountered Pokémon', () => {
    renderWhitRouter(<App />);

    const h2 = screen.getByRole('heading', { level: 2, name: /Encountered Pokémon/i });
    expect(h2).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWhitRouter(<App />);

    userEvent.click(screen.getByText('Fire'));
    expect(screen.getByText('Charmander')).toBeInTheDocument();

    const type = screen.getAllByTestId('pokemon-type-button')[1];
    userEvent.click(type);
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Charmander');

    const proxPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });
    userEvent.click(proxPokemon);
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent('Rapidash');

    userEvent.click(screen.getByText(/all/i));
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
  });
});
