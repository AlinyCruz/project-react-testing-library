import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWhitRouter from '../renderWithRouter';

describe('Teste o componente FavoritePokemon', () => {
  it('Teste se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWhitRouter(<App />);

    const noFavorite = screen.getByRole('link', { name: /favorite pokémon/i });

    act(() => {
      userEvent.click(noFavorite);
    });

    const noFavorite2 = screen.getByText(/no favorite pokémon found/i);

    expect(noFavorite2).toBeInTheDocument();
  });

  it('Teste se apenas são exibidos os Pokémon favoritados', () => {
    renderWhitRouter(<App />);

    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });

    act(() => {
      userEvent.click(favorite);
    });

    expect(favorite).toBeInTheDocument();
  });
});
