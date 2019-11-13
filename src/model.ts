let counter = 1;
export const createID = () => {
  return counter++;
};
export const todos = [
  { text: "do stuff", done: true, id: createID() },
  { text: "do other stuff", id: createID() }
];
export interface Propstodos {
  text: string;
  done: boolean;
  id: number;
}
