const initState = {
  number: 0,
  loading: false
}

const exampleRed = (state = initState, action) => {
  switch (action.type) {
    case 'NUM':
      return {
        ...state,
        loading: true
      }
    case 'INCREASE_NUM':
      return {
        ...state,
        number: state.number + action.payload,
        loading: false
      }
    case 'DECREASE_NUM':
      if (state.number === 0) {
        return {
          ...state,
          number: state.number,
          loading: false
        }
      } else {
        return {
          ...state,
          number: state.number - action.payload,
          loading: false
        }
      }

    default:
      return state
  }
}

export default exampleRed
