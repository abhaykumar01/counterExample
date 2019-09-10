export const loading = ()=>{
  return {
    type:'LOADING'
  }
}
export const ageUp = (val) => {
  return {
    type:'AGE_UP',
    value:val
  }
}

export const ageDown = (val) => {
  return {
    type:'AGE_DOWN',
    value:val
  }
}