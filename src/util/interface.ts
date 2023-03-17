export interface Product {
  name: string;
  brand: string;
  color: string;
}
export interface ProductNewFeature extends Product {
  speed?: "100km/h";
}
export interface ICard {
  title: string;
  desc?: string;
  image: string;
  link: string;
}

//assertion
export type FinalProduct = Product & ProductNewFeature;
