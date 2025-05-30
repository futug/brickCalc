export function foo(brickWidth: number, minGap: number, wallHeight: number) {
    const base = brickWidth + minGap;
    const result: number[] = [];
  
    for (let i = 5; i >= 1; i--) {
      result.push(parseFloat((base - i * 0.1).toFixed(2)));
    }
  
    result.push(parseFloat(base.toFixed(2)));
  
    for (let i = 1; i <= 5; i++) {
      result.push(parseFloat((base + i * 0.1).toFixed(2)));
    }
  
    const measuring = result.map((e) => {
      return {
        Markup: e,
        rowsCount: parseFloat(((wallHeight * 100) / e).toFixed(2)),
        brickGap: parseFloat((e - brickWidth).toFixed(2))
      };
    });
  
    const measuringOnFloor = result.map((e) => {
      return {
        Markup: e,
        rowsCount: parseFloat((((wallHeight * 100) - brickWidth) / e).toFixed(2)),
        brickGap: parseFloat((e - brickWidth).toFixed(2))
      };
    });
  
    const bestMeasuring = measuring.filter(({ rowsCount }) => {
      const fractional = rowsCount % 1;
      return fractional >= 0 && fractional <= 0.18;

    });
  
    const bestMeasuringOnFloor = measuringOnFloor.filter(({ rowsCount }) => {
      const fractional = rowsCount % 1;
      return fractional >= 0 && fractional <= 0.18;
    });
  
    return {allMeasurings: measuring, bestMatch: bestMeasuring, bestMatchOnFloor: bestMeasuringOnFloor};
  }
  