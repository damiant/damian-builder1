import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Favorites from './Favorites';

describe('Favorites Component', () => {
  beforeEach(() => {
    render(<Favorites />);
  });

  it('renders the component title', () => {
    const title = screen.getByText("Young's Favourite");
    expect(title).toBeInTheDocument();
  });

  it('renders two favorite items', () => {
    const trendingItem = screen.getByText('Trending on instagram');
    const underFortyItem = screen.getByText('All Under $40');
    
    expect(trendingItem).toBeInTheDocument();
    expect(underFortyItem).toBeInTheDocument();
  });

  it('renders Buy Now buttons for both items', () => {
    const buyNowButtons = screen.getAllByText('Buy Now!');
    expect(buyNowButtons).toHaveLength(2);
    
    buyNowButtons.forEach(button => {
      expect(button).toBeInTheDocument();
    });
  });

  it('renders both product images', () => {
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    
    expect(images[0]).toHaveAttribute('alt', 'Trending on instagram');
    expect(images[1]).toHaveAttribute('alt', 'All Under $40');
  });

  it('renders with correct styling classes', () => {
    const container = screen.getByText("Young's Favourite").closest('div');
    expect(container?.parentElement).toHaveClass('w-[449px]', 'h-[229px]', 'relative');
  });

  it('renders the decorative yellow underline SVG', () => {
    const yellowSvg = document.querySelector('svg path[fill="#EBD96B"]');
    expect(yellowSvg).toBeInTheDocument();
  });

  it('renders arrow icons for both items', () => {
    const arrows = document.querySelectorAll('svg path[fill="#797979"]');
    expect(arrows).toHaveLength(2);
  });

  it('has correct image sources', () => {
    const images = screen.getAllByRole('img');
    
    expect(images[0]).toHaveAttribute('src', 'https://api.builder.io/api/v1/image/assets/TEMP/31a25ae2dbc52f5997abb8d7d64c21f1ed7a1563?width=406');
    expect(images[1]).toHaveAttribute('src', 'https://api.builder.io/api/v1/image/assets/TEMP/507ff7b85b4622eb41ca48ea3a0ffe502e037575?width=406');
  });

  it('applies correct positioning for favorite items', () => {
    // Check for the positioned wrapper divs by using test-friendly queries
    const positionedDivs = document.querySelectorAll('.absolute');
    const leftPositions = Array.from(positionedDivs).map(div => div.className.toString());

    // Check that we have the correct positioned elements
    expect(positionedDivs.length).toBeGreaterThanOrEqual(2);
    expect(leftPositions.some(className => className.includes('left-[21px]'))).toBe(true);
    expect(leftPositions.some(className => className.includes('left-[246px]'))).toBe(true);
  });
});
