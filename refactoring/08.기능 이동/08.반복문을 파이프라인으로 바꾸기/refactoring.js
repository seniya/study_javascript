// case 1
const names = input
              .filter(i => i.job === "programmer")
              .map(i => i.name)


/* data example
  office | country | telephone
  Chicago, USA, 123456789
  Beijing, China, 98787654
  Seoul, Korea, 369369369
  Chennai, India, 001007009
*/
// case 2
function acquireData(input) {
  const lines = input.split('\n');

  const result = lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((fields) => fields[1].trim() === 'India')
    .map((fields) => ({ city: fields[0].trim(), phone: fields[2].trim }));

  return result;
}