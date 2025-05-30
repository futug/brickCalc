import { createContext, useState, useContext, type ReactNode, type ChangeEvent } from "react";
import { measuring } from "../util";

interface Props {
    children: ReactNode;
}
interface Inputs {
    brickHeight: string,
    minGap: string,
    wallHeight: string,
}

interface ResultItem {
    Markup: number;
    rowsCount: number;
    brickGap: number;
  }

  interface MeasuringResult {
    allMeasurings: ResultItem[];
    bestMatch: ResultItem[];
    bestMatchOnFloor: ResultItem[];
  }

  interface MeasuringContextType {
    inputs: Inputs;
    handleChange: (name: keyof Inputs) => (e: ChangeEvent<HTMLInputElement>) => void;
    calculate: () => void;
    cleanResults: () => void;
    result: MeasuringResult | null;
  }
const MeasuringContext = createContext<MeasuringContextType | null>(null);


export const MeasuringProvider = ({ children }: Props) => {
    const [inputs, setInputs] = useState<Inputs>({
        brickHeight: "",
        minGap: "",
        wallHeight: ""
      });

    const [result, setResult] = useState<MeasuringResult | null>(null);

    const handleChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(",", ".");
        if (/^\d*\.?\d*$/.test(value)) {
          setInputs((prev) => ({ ...prev, [name]: value }));
        }
      };

      const calculate = () => {
        const { brickHeight, minGap, wallHeight } = inputs;
        const bh = parseFloat(brickHeight);
        const mg = parseFloat(minGap);
        const wh = parseFloat(wallHeight);
        if (!isNaN(bh) && !isNaN(mg) && !isNaN(wh)) {
          setResult(measuring(bh, mg, wh));
        }
      };

      const cleanResults = () => {
        setResult(null);
        setInputs(
          {brickHeight: "",
        minGap: "",
        wallHeight: ""}
        )
      }
    return (
        <MeasuringContext.Provider value={{inputs, handleChange, calculate, result, cleanResults}}>
            {children}
        </MeasuringContext.Provider>
    )
}

export const useMeasuring = () => {
    const ctx = useContext(MeasuringContext);
    if (!ctx) throw new Error("useMeasuring must be used within MeasuringProvider");
    return ctx;
  };