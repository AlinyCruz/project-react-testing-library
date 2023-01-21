import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWhitRouter from '../renderWithRouter';

describe('Teste o componente FavoritePokemon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    const { history } = renderWhitRouter(<App />);

    act(() => history.push('/favorites'));

    const noFavorite2 = screen.getByText(/no favorite pokémon found/i);

    expect(noFavorite2).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados', () => {
    renderWhitRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });

    userEvent.click(moreDetails);

    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });

    userEvent.click(favorite);

    const pokemonFavorite = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(pokemonFavorite);

    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
  });
});
