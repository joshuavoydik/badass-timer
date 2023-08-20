import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerContainer = styled.div`
  font-size: 250px; /* 10x the previous size */
  text-align: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.red ? 'red' : props.gray ? 'gray' : 'limegreen')};
  border: none;
  color: white;
  padding: 50px 150px; /* 10x the previous size */
  text-align: center;
  font-size: 40px; /* 10x the previous size */
  margin: 20px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 20px; /* Slightly rounded corners */

  &:hover {
    background-color: ${(props) => (props.red ? '#a00' : props.gray ? '#555' : '#45a049')};
  }
`;

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timerId;

    if (isActive) {
      timerId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 10);
    } else {
      clearInterval(timerId);
    }

    return () => clearInterval(timerId);
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
  };

  const handleClear = () => {
    setIsActive(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = time % 100;
    const seconds = Math.floor((time / 100) % 60);
    const minutes = Math.floor((time / 6000) % 60);
    const hours = Math.floor(time / 360000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(
      2,
      '0'
    )}`;
  };

  return (
    <TimerContainer>
      <div>{formatTime(time)}</div>
      <div>
        <Button onClick={handleStart}>Start</Button>
        <Button red onClick={handleStop}>Stop</Button>
        <Button gray onClick={handleClear}>Clear</Button>
      </div>
    </TimerContainer>
  );
};

export default Timer;


