export const increment = 'INCREASE';
export const decrement = 'DECREMENT';

/*
  action creators
*/
export function countincrease (count){
  return { type:increment, count};
}
export function countdecrease (count){
  return { type:decrement, count};
}