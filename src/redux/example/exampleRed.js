
export const increase = (num) => {
  return {
    type: 'INCREASE_NUM',
    payload: num
  }
}
export const decrease = (num) => {
  return {
    type: 'DECREASE_NUM',
    payload: num
  }
}
export const req = () => {
  return {
    type: 'NUM'
  }
}

export const increaseNum = (num) => {
  return async (dispatch) => {
    dispatch(req())
    try {
      dispatch(increase(num))
    } catch (error) {
      console.log(error)
    }
  }
}
export const decreaseNum = (num) => {
  return async (dispatch) => {
    dispatch(req())
    try {
      dispatch(decrease(num))
    } catch (error) {
      console.log(error)
    }
  }
}
