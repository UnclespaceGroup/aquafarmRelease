import { CHANGE_CURRENT_BLOCK_IN_FORM } from 'reducer'

export const setCurrentBlockInForm = (current) => {
  return dispatch => {
    dispatch({
      type: CHANGE_CURRENT_BLOCK_IN_FORM,
      payload: current
    })
  }
}