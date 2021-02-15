import React from 'react'
import {text} from "@storybook/addon-knobs";
import Hero from "../components/Hero";

import image1 from './assets/01.jpg';
import image2 from './assets/02.jpg';
import Heading from "../components/Heading";


export default{
  title: "Components/Hero",
  component: Hero,
}


export const usage = () => (
<Hero image={image1}>
  <h1>{text('Title','Sua liberdade')}</h1>
  <p>{text('Text','Qualquer texto')}</p>
</Hero>);

export const withList = () => (
    
    <Hero 
    image={image2}>
      <Heading>
      <h1>Ganhe sua <strong>liberdade</strong><br />para ir e vir</h1>
      </Heading>
      <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>

      </ul>
      
    </Hero>
  
);
