function getRandomNumder(min, max) {
  const additionalFactorAtTheEnd = 1;
  // случайное число от min до (max+1) исключая
  const rand = min + Math.random() * (max + additionalFactorAtTheEnd - min);
  return Math.floor(rand);
}

export default getRandomNumder;
