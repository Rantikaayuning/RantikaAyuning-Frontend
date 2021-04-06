const electronicsCsv = `NAME, CATEGORY, PRICE
Xiaomi Redmi 5A, Smartphone, 1199000
Macbook Air, Laptop, 13775000
Samsung Galaxy J7, Smartphone, 3549000
DELL XPS 13, Laptop, 26799000
Xiaomi Mi 6, Smartphone, 5399000
LG V30 Plus, Smartphone, 10499000`

const parseCsv = csv => {
  const lines = csv.split("\n");
  const header = lines.shift().split(", ");
  lines.shift();
  return lines.map(line => {
    const bits = line.split(", ");
    const obj = {};
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

function sortElectronicsObject(list) {
    const obj = list.sort((a, b) => a.price-b.price);
    const newObj = [...obj].map(item => {
      return {
        name: item.name,
        price: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price),
        category: item.category
      }
    })
    return newObj;
}

console.log(sortElectronicsObject(result));
