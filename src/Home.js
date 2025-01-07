// src/components/Home.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoldenJackpot from './images/GoldenJackpot.jpeg';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';

const FullPageCarousel = styled(Carousel)`
  height: 100vh;
  .carousel-item {
    height: 100vh;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100vh;
  }
`;

const Home = () => {
  return (
    <FullPageCarousel interval={1000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image3}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Dream big, play smart, and let luck find you.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Every ticket is a chance to change your life forever</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Believe in your luck and let the universe surprise you</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </FullPageCarousel>
  );
};

export default Home;
