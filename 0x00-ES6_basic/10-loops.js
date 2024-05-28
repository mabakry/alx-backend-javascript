export default function appendToEachArrayValue(array, appendString) {
  const x = [];
  for (const value of array) {
    x.push(appendString + value);
  }
  return x;
}
