//[number, number]
type ThreeDCoordinatee = [x: number, y: number, z: number];
function addThreeDCoordinate(
  a: ThreeDCoordinatee,
  b: ThreeDCoordinatee
): ThreeDCoordinatee {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}
addThreeDCoordinate([100, 200, 300], [200, 500, 600]);

function simpleUseState<T>(val: T): [() => T, (v: T) => void] {
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}
interface Rank<R> {
  item: R;
  rank: number;
}
const [valu, setValu] = simpleUseState("linh");
console.log("🚀 ~ file: tuples.ts:20 ~ val", valu());
setValu("hihi");
console.log("🚀 ~ file: tuples.ts:20 ~ val", valu());
const [valu2, setValu2] = simpleUseState(100);

function ranker<R>(items: R[], rank: (val: R) => number): R[] {
  const ranks: Rank<R>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}
const language: {
  name: string;
  difficul: number;
}[] = [
  {
    name: "reactjs",
    difficul: 60,
  },
  {
    name: "angular",
    difficul: 80,
  },
  {
    name: "vue",
    difficul: 70,
  },
];
ranker(language, ({ difficul }) => difficul);
ranker([1, 2, 3, 4, 5], (num) => num * 5);
