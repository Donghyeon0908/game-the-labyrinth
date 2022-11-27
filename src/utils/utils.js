const isEqual = (curPosition, diffPosition) => {
  const iterator = curPosition.entries();
  let result = true;

  for (const [index, value] of iterator) {
    if (value !== diffPosition[index]) {
      result = false;
      break;
    }
  }

  return result;
};

export default isEqual;
