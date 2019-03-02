export const normalizePhone = value => {
  if (!value) {
    return value
  }

  const onlyNums = value.replace(/[^\d]/g, '')
  if (onlyNums.length === 1) {
    return `+7 `
  }
  if (onlyNums.length <= 3) {
    return `+7 (${onlyNums.slice(1, 4)})`
  }
  if (onlyNums.length <= 7) {
    return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4)}`
  }
  return `+7 (${onlyNums.slice(1, 4)}) ${onlyNums.slice(4, 7)}-${onlyNums.slice(
    7,
    11
  )}`
}
