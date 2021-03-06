export const FORM_START = 'FORM_START'
export const FORM_SUCCESS = 'FORM_SUCCESS'

export const CHANGE_CURRENT_BLOCK_IN_FORM = 'CHANGE_CURRENT_BLOCK_IN_FORM'

export function currentForm (state = FORM_START, action) {
  switch (action.type) {
    case CHANGE_CURRENT_BLOCK_IN_FORM:
      return action.payload
    default:
      return state
  }
}
