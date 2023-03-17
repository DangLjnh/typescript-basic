const isStudent: boolean = true;
const school = "STU";
//Union type type A | type B

//Intersection types &
interface IBusinessPartner {
  name: string;
  credit: number;
}
interface IIdentity {
  id: number;
  name: string;
}
interface IContact {
  email: string;
  phone: string;
}
type Employee = IIdentity & IContact;
type Customer = IBusinessPartner & IContact;
let DangLinh: Employee = {
  id: 1,
  name: "Linh",
  email: "",
  phone: "093",
};

//Type casting as
//Type assertion as
