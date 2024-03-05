const sum = (a, b) => {
  return a + b;
};

const dungeon = (trOne, trTwo, person) => {
  var result = "";
  if (trialOne(trOne)) {
    if (trialTwo(trTwo)) {
      result = `${person}⚔💰💍👑`;
    } else {
      return `${person}⚔🚑`;
    }
  } else if (!trialOne(trOne)) {
    if (trialTwo(trTwo)) {
      result = `${person}🐍💰💍👑`;
    } else {
      result = "💀";
    }
  }
  return result;
};

const trialOne = (strength) => {
  return strength > 50;
};

const trialTwo = (iqLevel) => {
  return iqLevel > 90;
};

export { sum, dungeon, trialOne, trialTwo };
