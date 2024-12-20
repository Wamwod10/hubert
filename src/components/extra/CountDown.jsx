import React, { useState, useEffect } from "react";
import "./extra.scss";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 1,
    hours: 21,
    minutes: 21,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="countdown">
      <div className="countdown__flex-box">
        <div className="time-box">
        <span className="time">{formatTime(time.days)}</span>
      </div>
        <span className="label">дни</span>
      </div>
      <div className="separator">:</div>
     <div className="countdown__flex-box">
         <div className="time-box">
        <span className="time">{formatTime(time.hours)}</span>
      </div>
        <span className="label">часы</span>
     </div>
      <div className="separator">:</div>
      <div className="countdown__flex-box">
        <div className="time-box">
        <span className="time">{formatTime(time.minutes)}</span>
      </div>
        <span className="label">минуты</span>
      </div>
      <div className="separator">:</div>
      <div className="countdown__flex-box">
        <div className="time-box">
        <span className="time">{formatTime(time.seconds)}</span>
      </div>
        <span className="label">секунды</span>
      </div>
    </div>
  );
};

export default Countdown;