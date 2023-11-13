import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";

export default function ConfettiSlider({ myConfetti }) {
  const [value, setValue] = React.useState(30);

  if (value === 100) {
    var duration = 10 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      myConfetti({
        particleCount: 15,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      myConfetti({
        particleCount: 15,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    myConfetti({
      particleCount: value < 50 ? value : 500,
      startVelocity: value * 0.5,
      spread: value * 3.6,
      origin: {
        x: Math.random(),
        // since they fall down, start a bit higher than random
        y: Math.random() - 0.2,
      },
    });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <p>Less</p>
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <p>Bring it on!!</p>
      </Stack>
      {/* <Confetti particleInput={value} /> */}
    </Box>
  );
}
