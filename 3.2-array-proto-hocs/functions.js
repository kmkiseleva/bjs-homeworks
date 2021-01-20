console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(array) {
   console.log(array.filter(item => item.name));
}

getNames(weapons);