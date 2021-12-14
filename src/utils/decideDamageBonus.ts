const dbMap: { max: number; db: string }[] = [
  { max: 12, db: '-1D6' },
  { max: 16, db: '-1D4' },
  { max: 24, db: '0' },
  { max: 32, db: '+1D4' },
  { max: 40, db: '+1D6' },
  { max: 46, db: '+2D6' },
  { max: 72, db: '+3D6' },
];

export const decideDamageBonus = (str: number, siz: number): string => {
  const comparedValue = str + siz;
  const resultElement = dbMap.find((element) => element.max >= comparedValue);
  if (!resultElement) {
    const lastElement = dbMap.slice(-1)[0];
    const initialValue = lastElement.max;
    const initialDiceNumMatch = lastElement.db.match(/\d+/);
    if (initialDiceNumMatch == null) {
      throw new Error();
    }
    const initialDiceNum = Number(initialDiceNumMatch[0]);
    if (Number.isNaN(initialDiceNum)) {
      throw new Error();
    }
    const overValue = comparedValue - initialValue;
    const addDiceNum = Math.ceil(overValue / 16);

    return `+${initialDiceNum + addDiceNum}D6`;
  }

  return resultElement.db;
};
