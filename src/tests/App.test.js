import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWhitRouter from '../renderWithRouter';

describe('Teste o componente App', () => {
  it('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
    renderWhitRouter(<App />);

    const home = screen.getByText(/Home/i);
    const about = screen.getByText(/About/i);
    const favoritePokemon = screen.getByText(/Favorite Pokémon/i);

    expect(home).toBeInTheDocument();
    expect(about).toBeInTheDocument();
    expect(favoritePokemon).toBeInTheDocument();
  });
});
