const firstFrequentValue = 1;
const secondFrequentValue = 100;
function getRandomNumder(min = firstFrequentValue, max = secondFrequentValue) {
  const additionalFactorAtTheEnd = 1;
  // случайное число от min до (max+1) исключая
  const rand = min + Math.random() * (max + additionalFactorAtTheEnd - min);
  return Math.floor(rand);
}

export default getRandomNumder;
