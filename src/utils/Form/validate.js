export const required = value => (value ? undefined : 'Поле обязательно для заполнения')

export const maxLength = max => value =>
  value && value.length > max ? `Должно быть ${max} символов или меньше` : undefined
export const maxLength15 = maxLength(15)
export const minLength = min => value =>
  value && value.length < min ? `Должно быть ${min} символов или больше` : undefined
export const minLength2 = minLength(2)
export const number = value =>
  value && isNaN(Number(value)) ? 'Должно быть числом' : undefined
export const minValue = min => value =>
  value && value < min ? `Должно быть не менее ${min}` : undefined
export const minValue13 = minValue(13)
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Введите корректный Email'
    : undefined
export const tooYoung = value =>
  value && value < 13
    ? 'Вы не соответствуете минимальному возрасту!'
    : undefined
export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'В самом деле? Вы все еще используете AOL для своей электронной почты'
    : undefined
export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9а-яА-Я ]/i.test(value)
    ? 'Только буквенно-цифровые символы'
    : undefined
export const phoneNumber = value =>
  value && !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11}(\s*)?$/i.test(value)
    ? 'Неверный номер телефона, должно быть 11 цифр'
    : undefined
