// type Dev = {
//   name: string;
// } & Record<string, any>;
type Dev<T> = {
  name: string;
  [key: string]: T | string;
};
const danglinh: Dev<number> = {
  name: "Nhat Linh",
  age: 21,
};

type OptionFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlag = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOption = OptionFlags<FeatureFlag>;

//Mapping modifier
//remove readonly attributes from a type properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
type UnlockedAccount = CreateMutable<LockedAccount>;
//remove optional
type ConCrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
type MaybeUser = {
  name: string;
  age?: number;
  school?: number;
};
type User = ConCrete<MaybeUser>;
//key mapping via as
// type MappedTypeWithNewProperty<Type> = {
//   [Property in keyof Type as NewKeyType]: Type[Property];
// };
type Getters<T> = {
  [K in keyof T as `on${Capitalize<string & K>}Change`]: (value: T[K]) => T[K];
} & {
  [K in keyof T as `on${Capitalize<string & K>}Focus`]: (value: T[K]) => void;
};
interface Person {
  name: string;
  age: number;
  location: string;
}
type LazyPerson = Getters<Person>;
//
type RemoveKindField<Type> = {
  [Property in keyof Type as Exclude<Property, "kind">]: Type[Property];
};
interface Cirle {
  kind: "Cirle";
  radius: number;
}
type KindOfCircle = RemoveKindField<Cirle>;
//
type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};
type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };
type Config = EventConfig<SquareEvent | CircleEvent>;
//
type ExtractPii<Type> = {
  [Property in keyof Type]: Type[Property] extends { pill: true }
    ? true
    : false;
};
type DBFields = {
  id: { format: "increase" };
  name: { type: string; pill: true };
};
type ObjectNeedPii = ExtractPii<DBFields>;
