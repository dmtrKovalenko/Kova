export default function shuffle(array) {
  let copy = [], i, n = array.length

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      n--;
    }
  }

  return copy;
}