import React, { useRef, useState } from 'react';

import CountDownTimer from 'react-native-countdown-timer-hooks';

const CountDown = ({ timestamp }) => {
  const refTimer = useRef();

  // For keeping a track on the Timer
  const [timerEnd, setTimerEnd] = useState(false);

  const timerCallbackFunc = (timerFlag) => {
    // Setting timer flag to finished
    setTimerEnd(timerFlag);
    console.warn('La subasta esta en vivo.');
  };
  return (
    <CountDownTimer
      ref={refTimer}
      timestamp={timestamp}
      timerCallback={timerCallbackFunc}
      containerStyle={{
        width: 120,
        padding: 4,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        backgroundColor: '#f4e76f'
      }}
      textStyle={{
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.25,
        textShadowColor: 'rgba(0, 0, 0, 0.55)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
      }}
    />
  );
};

export default CountDown;
