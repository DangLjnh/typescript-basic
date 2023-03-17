//in -> check key in object is exist
function log(obj: { name: string } | { age: number }) {
  if ("name" in obj) {
    console.log(obj.name);
  }
}
//typeof
const student = {
  name: "linh",
  age: 21,
};
type Student = typeof student;
//keyof -> union type
type Students = keyof typeof student;
