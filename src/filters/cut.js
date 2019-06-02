const cut = {}

function cutString (value, length) {
  if (value.length > length) {
    return `${value.slice(0, length)}...`
  }
  return value
}

cut.install = function (Vue) {
  Vue.filter('cut', (value, length) => {
    return cutString(value, length)
  })
}

export default cut
