import React from 'react'
import { render } from '@testing-library/react';
import Hero from './Hero';

test('renders Hero with children',()=>{
  const {debug, getByText} = render(
    <Hero>
      <p>Luis Carlos</p>
    </Hero>
  );

  expect(getByText("Luis Carlos")).toBeInTheDocument();


});


test ('render image background',()=>{
  const image = "http://teste/iamge.jpg"
  const{getByTestId} = render(<Hero image={image} />);
  expect(getByTestId("hero")).toHaveStyleRule({
    backgroundImage:image,
  })
  
});
