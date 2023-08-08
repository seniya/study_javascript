// case 1
let totalSalary = 0;
for (const p of people) {  
  totalSalary += p.salary
}
let averageAge = 0;
for (const p of people) {
  averageAge += p.age
}
averageAge = averageAge / people.length


// case 2
function fn() {
  return `최연소: ${youngestAge()}, 총급여: ${totalSalary}`;

  function totalSalary() {
    return people.reduce((total, p) => total + p.salary, 0);
  }

  function youngestAge() {
    return Math.min(...people.map((p) => p.age));
  }
}