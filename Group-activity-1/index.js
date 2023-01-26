let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find((e) => e % 2 == 0));

//////////////////////////////////

let customers = [
    {
      name: 'ABC Inc',
      credit: 100,
    },
    {
      name: 'ACME Corp',
      credit: 200,
    },
    {
      name: 'IoT AG',
      credit: 300,
    },
  ];

  const cb = function(credit100) {
    return credit100.credit > 100;
  }
  console.log(customers.find(cb));

//OR:
//console.log(customers.find((e) => e.credit > 100));


//////////////////////////////////////

  let cities = [
    { name: 'Los Angeles', population: 3792621 },
    { name: 'New York', population: 8175133 },
    { name: 'Chicago', population: 2695598 },
    { name: 'Houston', population: 2099451 },
    { name: 'Philadelphia', population: 1526006 },
  ];

  let bigCities = function(cities) {
    return cities.population > 3000000;
  }
  console.log(cities.filter(bigCities));

  //OR:
  // let bigCities = cities
  //.filter((e) => e.population > 3_000_000);
  //console.log(bigCities);

let odd = [1, 3, 5];
let even = [2, 4, 6];
// merge odds and evens array
let combined = odd.concat(even);
console.log(odd);
console.log(even);
console.log(combined);

let upper = ['A', 'B', 'C'];
let lower = ['a', 'b', 'c'];
let digits = [1, 2, 3];

const alphanumerics = upper.concat(lower, digits);
console.log(alphanumerics);