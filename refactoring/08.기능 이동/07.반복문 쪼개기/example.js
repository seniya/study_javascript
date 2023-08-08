// case 1
let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
  averageAge += p.age
  totalSalary += p.salary
}
averageAge = averageAge / people.length


// case 2
function fn() {
  let youngest = people[0] ? people[0].age : Infinity;
  let totalSalary = 0;

  for (const p of people) {
    if (p.age < youngest) youngest = p.age;
    totalSalary += p.salary;
  }

  return `최연소: ${youngest}, 총급여: ${totalSalary}`;
}