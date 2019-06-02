const firstUpper = {}

function convertFirst (value) {
  const first = value.charAt(0).toUpperCase()
  const remainder = value.slice(1)

  return `${first}${remainder}`
}

firstUpper.install = function (Vue) {
  Vue.filter('first-upper', (value) => {
    return convertFirst(value)
  })
}

export default firstUpper
