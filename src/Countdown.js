// src/components/Countdown.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: darkgrey;
  padding: 20px;
  margin-top: 20px;
  height: 5cm;
`;

const Title = styled.h3`
  color: #ffc107; /* Bootstrap warning color */
  font-weight: bolder;
  padding-left: 20px;
  border-bottom: 3px solid #f5f5f5 !important;
  display: inline-block;
`;


const Text = styled.p`
  line-height: 20px;
  height: 40px;
`;

const TimerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TimeBox = styled.div`
  background-color: lightgrey;
  padding: 10px;
  margin: 0 10px;
  border-radius: 100px;
  text-align: center;
  width: 100px;
`;

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const resultTime = new Date();
    resultTime.setHours(19, 0, 0, 0); // Set to 7 PM

    if (now > resultTime) {
      resultTime.setDate(resultTime.getDate() + 1); // Set to next day if past 7 PM
    }

    const diff = resultTime - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Section>
        <center>
      <Title>Announcement</Title>
      </center>
      
      <center>
      <div className="text-center">
        <Text>Next Golden Jackpot results in:</Text>
      </div>
      </center>
      <TimerContainer id="timer">
        <TimeBox>
          <div className="time mx-1 rounded text-monospace" id="hours2">
            <b><h4>{String(timeLeft.hours).padStart(2, '0')}</h4>
            <p>Hours</p></b>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time mx-1 rounded text-monospace" id="minutes2">
            <b><h4>{String(timeLeft.minutes).padStart(2, '0')}</h4>
            <p>Minutes</p></b>
          </div>
        </TimeBox>
        <TimeBox>
          <div className="time mx-1 rounded text-monospace" id="seconds2">
           <b> <h4>{String(timeLeft.seconds).padStart(2, '0')}</h4>
            <p>Seconds</p></b>
          </div>
        </TimeBox>
      </TimerContainer>
    </Section>
  );
};

export default Countdown;
