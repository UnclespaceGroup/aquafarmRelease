import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import s from './Form.module.scss'

const FieldInput = ({ input, label, type, placeholder, options, mask, meta: { touched, error, warning } }) => {
  let valid = null
  let invalid = null
  if (touched) {
    if (error || warning) {
      invalid = true
    } else {
      valid = true
    }
  }
  return (
    <div className={s.container}>
      <input {...input} type={type} className={classNames(s.input, { [s.valid]: valid }, { [s.invalid]: invalid })} />
      <div className={(input.value.trim() !== '') ? s.floatPlaceholder_active : s.floatPlaceholder}>{placeholder}</div>
      {
        input.value.trim() !== '' && <div className={s.clearButton} onClick={() => { input.onChange('') }} >X</div>
      }
      {touched &&
      ((error && <div className={s.formFeedback}>{error}</div>) ||
        (warning && <div className={s.formFeedback}>{warning}</div>))}
    </div>
  )
}
FieldInput.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  type: PropTypes.string,
  mask: PropTypes.array,
  meta: PropTypes.object
}
export default FieldInput
