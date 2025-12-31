import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const data = [
  { option: "₹100" },
  { option: "₹50" },
  { option: "Try Again" },
  { option: "Free Spin" },
  { option: "₹200" },
  { option: "Better Luck" },
];

export default function WheelCanvas() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  return (
    <div style={{ display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#FFD700", "#FFA500"]}
        textColors={["#000"]}
        outerBorderColor="#000"
        outerBorderWidth={8}
        radiusLineColor="#000"
        radiusLineWidth={1}
        fontSize={16}
        onStopSpinning={() => {
          setMustSpin(false);
          alert(`You won: ${data[prizeNumber].option}`);
        }}
        
      />

      <button
        onClick={handleSpinClick}
        style={{ marginTop: 20, padding: "10px 20px", fontSize: 18 }}
      >
        SPIN
      </button>
    </div>
  );
}

