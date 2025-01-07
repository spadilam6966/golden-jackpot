import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import axios from 'axios';  // Assuming axios is used for the API call
import './Winners.css';

const Underline = styled.div`
  height: 4px;
  background-color: darkred;
  width: 100px;
  margin: 0 auto 20px auto;
`;

const Amount = styled.p`
  color: red;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Prize = styled.p`
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const Winners = () => {
  const [prizeData, setPrizeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch prize data from the API
  useEffect(() => {
    const fetchPrizeData = async () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in 'YYYY-MM-DD' format
        const response = await axios.get(`http://localhost:8080/prizes?date=${currentDate}`); // Adjust with the actual endpoint
        console.log(response.data);  // Log the data to verify the structure
        setPrizeData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch prize data');
        setLoading(false);
        console.error('Error fetching prize data:', error);
      }
    };

    fetchPrizeData();
  }, []);

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Show 1 slide at a time (each slide will have 3 winners)
    slidesToScroll: 1, // Scroll 1 slide at a time (each slide will have 3 winners)
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: "30px",
          color: "blue",
          border: "1px blue solid"
        }}
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024, // Screens smaller than 1024px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600, // Screens smaller than 600px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Chunk the prizeData into groups of 3
  const chunkedPrizeData = [];
  if (Array.isArray(prizeData)) {
    for (let i = 0; i < prizeData.length; i += 3) {
      chunkedPrizeData.push(prizeData.slice(i, i + 3));  // Push chunks of 3 elements
    }
  } else {
    console.error("prizeData is not an array:", prizeData);
  }

  return (
    <section className="ftco-section ftco-game-schedule ftco-no-pt" id="results">
      <div className="container">
        <div className="col-md-12 heading-section ftco-animate mb-3">
          <center><span className="h3">Winners</span>
          <Underline /></center>
        </div>
        <div className="row ftco-animate">
          <div className="col-md-12 carousel-game-schedule">
            {/* Applying slick settings here */}
            <Slider {...settings}>
              {chunkedPrizeData.map((chunk, index) => (
                <div key={index}>
                  <div className="row">
                    {Array.isArray(chunk) && chunk.map((prize, idx) => (
                      <div className="col-md-4" key={idx}>
                        <div className="item bg-dark rounded mb-3">
                          <div className="game-schedule">
                            <div className="sport-team d-flex align-items-center">
                              <div className="m-0">
                                <div className="text-capitalize text-warning d-flex">
                                  <Amount>LION LUCKY</Amount>
                                  <p className="text-white-50 ml-5">{new Date().toLocaleDateString()}</p>
                                </div>
                                <div className="text d-flex m-0 p-0">
                                  <Prize>
                                    <span className="h2 mr-4 font-weight-bold">{prize.prize}</span>
                                  </Prize>
                                  <Prize>
                                    <h5 className="text-white mt-2 font-italic">{prize.ticket}</h5>
                                  </Prize>
                                </div>
                                <Amount>{prize.amount}</Amount>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Winners;
