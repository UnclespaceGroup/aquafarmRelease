export const createNormalizeCount = (min, max) => (value, prevValue) => {
  if (!value) {
    return min
  }

  const _val = parseInt(value)

  if (isNaN(_val)) {
    return prevValue
  }

  if (_val < min) return min
  if (_val > max) return max

  return _val
}
