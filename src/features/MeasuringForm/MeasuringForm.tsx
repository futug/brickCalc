import { TextField, Button, Box } from "@mui/material";
import { useMeasuring } from "../../shared/context";

export const InputForm = () => {
  const { inputs, handleChange, calculate, result } = useMeasuring();

  return (
    <>
      {!result && 
      <Box sx={{display: "flex", flexDirection: "column", gap:2, margin: 2}}>
      <TextField label="Высота брика в см." value={inputs.brickHeight} onChange={handleChange("brickHeight")} />
      <TextField label="Желаемая фуга в см." value={inputs.minGap} onChange={handleChange("minGap")} />
      <TextField label="Высота стены в м." value={inputs.wallHeight} onChange={handleChange("wallHeight")} />
      <Button onClick={calculate}>Рассчитать</Button>
      </Box>}
    </>
  );
};