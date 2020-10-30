import mmt from 'moment'
import _ from 'lodash'
export default {
  objToUrl(data) {
    var _result = []
    for (var key in data) {
      var value = data[key]
      if (value) {
        if (value.constructor === Array) {
          value.forEach(function (_value) {
            _result.push(key + '=' + _value)
          })
        } else {
          _result.push(key + '=' + value)
        }
      }
    }
    return _result.join('&')
  },
  formatObjectForMomentAttr(obj) {
    if (obj) {
      const r = _.cloneDeep(obj)
      for (let pro in r) {
        if (r[pro] && r[pro] instanceof mmt) {
          r[pro] = this.momentToString(r[pro])
        }
      }
      return r
    } else {
      return obj
    }
  },
  momentToString(m) {
    if (m) {
      return m.format('YYYY-MM-DD')
    } else {
      return null
    }
  },
}
