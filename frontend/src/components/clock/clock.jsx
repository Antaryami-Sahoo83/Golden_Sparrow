import React, { useEffect, useState } from "react";
import "./clock.css";
import { color } from "framer-motion";

const Clock = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  // Set the date we're counting down to
  const countDownDate = new Date("July 29, 2023 16:30:00").getTime();

  useEffect(() => {
    // Update the count down every 1 second
    const timer = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // If the count down is over, clear the timer
      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("EXPIRED");
      } else {
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, [countDownDate]);

  return (
    <div className="clock-container">
      <div className="clock">
        <p className="clock-label" style={{ color: "red" }}>
          {timeLeft}
        </p>
        <p style={{ fontSize: "large", color: "purple" }}>
          Do Not Miss Offer!!!
        </p>
        <p style={{ fontSize: "x-large", color: "brown" }}>
          Apply Promo Code GOLD11 To Get 11% Discount!
        </p>
      </div>
    </div>
  );
};

export default Clock;
