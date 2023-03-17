// //[number, number]
// type ThreeDCoordinate = [x: number, y: number, z: number];
// function addThreeDCoordinate(
//   a: ThreeDCoordinate,
//   b: ThreeDCoordinate
// ): ThreeDCoordinate {
//   return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
// }
// addThreeDCoordinate([100, 200, 300], [200, 500, 600]);

// function simpleUseState(val: string): [() => string, (v: string) => void] {
//   return [
//     () => val,
//     (v: string) => {
//       val = v;
//     },
//   ];
// }
// const [val, setVal] = simpleUseState("linh");
// console.log("🚀 ~ file: tuples.ts:20 ~ val", val());
// setVal("hihi");
// console.log("🚀 ~ file: tuples.ts:20 ~ val", val());
