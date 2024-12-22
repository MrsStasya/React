import * as React from "react";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CelsiumIcon from "./celsium.png";
import FaringIcon from "./faring.png";
import './styleTemperature.css'

const label = { inputProps: { "aria-label": "Switch demo" } };

function TemperatureConverterMono() {
  const [temperature, setTemperature] = useState("");
  const [degreesCelsius, setDegreesCelsius] = useState(true);

  const changeDegrees = () => {
    setDegreesCelsius(degreesCelsius ? false : true);
  };

  const calculateTemperature = (e) => {
    e.preventDefault();
    if (degreesCelsius) {
      setTemperature((Number.parseFloat(temperature) * 1.8 + 32).toFixed(2));
    } else {
      setTemperature(((Number.parseFloat(temperature) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <div className="TemperatureConverter">
      <div className="temperatureDegreesSwitcher">
        <img src={FaringIcon} alt="Fahrenheit" width="32px" />
        <Switch {...label} defaultChecked onChange={changeDegrees} />
        <img src={CelsiumIcon} alt="Celsius" width="32px" />
      </div>
      <TextField
        label="Укажите температуру"
        variant="outlined"
        fullWidth
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateTemperature}
        style={{ marginBottom: 20 }}
      >
        Конвертировать
      </Button>
    </div>
  );
}

export default TemperatureConverterMono;
