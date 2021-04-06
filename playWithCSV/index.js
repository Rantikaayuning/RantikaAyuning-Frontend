const electronicsCsv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const parseCsv = csv => {
  let lines = csv.split("\n");
  const header = lines.shift().split(", ");
  lines.shift();
  return lines.map(line => {
    const bits = line.split(", ");
    let obj = {};
    header.forEach((h, i) => obj[h] = bits[i]);
    return obj;
  })
};

const electronics = parseCsv(electronicsCsv)
const result = electronics.map(item => {
  return {
    name: item.NAME,
    price: item.PRICE,
    category: item.CATEGORY
  }
})

function sortAssocObject(list) {
    let numberObj = list.sort((a, b) => a.price-b.price);
    return numberObj;
}

console.log(sortAssocObject(result));
