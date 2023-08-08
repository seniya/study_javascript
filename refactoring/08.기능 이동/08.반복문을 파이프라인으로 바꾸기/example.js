// case 1.
const names = []
for (const i of input) {
  if (i.job === "programmer") {
    names.push(i.name)
  }
}

/* data example
  office | country | telephone
  Chicago, USA, 123456789
  Beijing, China, 98787654
  Seoul, Korea, 369369369
  Chennai, India, 001007009
*/
// case 2.
function acquireData(input) {
  const lines = input.split('\n');
  let firstLine = true;
  const result = [];

  for (const line of lines) {
    if (firstLine) {
      firstLine = false;
      continue;
    }
    if (line.trim() === '') continue;

    const record = line.split(',');

    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim });
    }
  }
  return result;
}