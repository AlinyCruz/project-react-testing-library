import React from 'react';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWhitRouter from '../renderWithRouter';
import App from '../App';

describe(' Teste o componente About', () => {
  beforeEach(() => {
    renderWhitRouter(<App />);
    const about = screen.getByRole('link', { name: /About/i });
    act(() => userEvent.click(about));
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    const aboutPokedex = screen.getByRole('heading', { name: /About Pokédex/i });

    expect(aboutPokedex).toBeInTheDocument();
  });

  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const pokedex1 = screen.getByText(/one can filter pokémon by type, and see more details for each one of them/i);

    expect(pokedex1.tagName).toBe('P');
    expect(pokedex1).toBeInTheDocument();

    const pokedex2 = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);

    expect(pokedex2.tagName).toBe('P');
    expect(pokedex2).toBeInTheDocument();
  });

  it('Teste se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgPokedex = screen.getByRole('img', { name: /pokédex/i });

    expect(imgPokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
