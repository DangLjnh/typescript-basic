const devices = [
  {
    name: "iPhone",
    price: 2000,
  },
  {
    name: "iPad",
    price: 3000,
  },
  {
    name: "Macbook",
    price: 5000,
  },
];

function getDeviceKey<Obj, Key extends keyof Obj>(
  items: Obj[],
  key: Key
): Obj[Key][] {
  return items.map((item) => item[key]);
}

getDeviceKey(devices, "price");

//[]
