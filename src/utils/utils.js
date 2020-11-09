import { message } from 'antd'
import mmt from 'moment'

function objToUrl(data) {
  if (data) {
    var _result = []
    for (var key in data) {
      var value = data[key]
      if (value !== undefined) {
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
  } else {
    return ''
  }
}

function createPromise(url, cfg) {
  return new Promise(function (resolve, reject) {
    fetch(url, cfg)
      .then((response) => response.json()) //把数据解析成json格式,然后取出
      .then((result) => {
        console.log(`  result:${JSON.stringify(result)}`)
        if (result.code === '0') {
          resolve(result)
        } else if (result.code === '401' || result.code === 401) {
          message.error(`Please login First!`)
          alert('没有登录')
          setInterval(function () {
            // document.location.href = '/#/login'
          }, 1000)
        } else {
          // 500错误
          message.error(`error:${JSON.stringify(result)}`)
        }
      })
      .catch((error) => {
        reject(error) //表示失败
      })
  })
}

export default {
  PageUtils: {},
  Transfer: {
    objToUrl(data) {
      return objToUrl(data)
    },
    timestampToDate(timestamp) {
      const m = this.timestampToMoment(timestamp)
      return this.momentToDate(m)
    },
    timestampToMoment(timestamp) {
      return mmt(timestamp, 'x')
    },
    momentToTimestamp(moment) {
      return moment.format('x')
    },
    momentToDate(moment) {
      return moment.format('YYYY-MM-DD')
    },
    dateToMoment(dateStr) {
      return mmt(dateStr, 'YYYY-MM-DD')
    },
  },
  HttpUtil: {
    put: function (url, params, cfg) {
      const httpCfg = cfg ? cfg : {}
      const putCfg = {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        ...cfg,
      }
      if (params) {
        putCfg.body = JSON.stringify(params)
      }
      console.log(`${putCfg.method}[ ${url}] : `)
      if (params) {
        console.log(`  params : ${JSON.stringify(params)}`)
      }
      if (putCfg) {
        console.log(`  cfg : ${JSON.stringify(putCfg)}`)
      }

      return createPromise(url, putCfg)
    },
    post: function (url, params, cfg) {
      const httpCfg = cfg ? cfg : {}
      const postCfg = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        ...cfg,
      }
      if (params) {
        postCfg.body = JSON.stringify(params)
      }
      console.log(`${postCfg.method}[ ${url}] : `)
      if (params) {
        console.log(`  params : ${JSON.stringify(params)}`)
      }
      if (postCfg) {
        console.log(`  cfg : ${JSON.stringify(postCfg)}`)
      }

      return createPromise(url, postCfg)
    },
    delete: function (url, params, cfg) {
      const httpCfg = cfg ? cfg : {}
      const deleteCfg = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        ...cfg,
      }
      if (params) {
        deleteCfg.body = JSON.stringify(params)
      }
      console.log(`${deleteCfg.method}[ ${url}] : `)
      if (params) {
        console.log(`  params : ${JSON.stringify(params)}`)
      }
      if (deleteCfg) {
        console.log(`  cfg : ${JSON.stringify(deleteCfg)}`)
      }

      return createPromise(url, deleteCfg)
    },
    get: function (url, params, cfg) {
      const httpCfg = cfg ? cfg : {}
      const getCfg = {
        method: 'get',
        headers: { 'Content-Type': 'application/json' },
        ...cfg,
      }
      console.log('----------------------', params)
      console.log(`${getCfg.method}[ ${url}?${objToUrl(params)}] : `)
      if (params) {
        console.log(`  params : ${objToUrl(params)}`)
      }
      if (getCfg) {
        console.log(`  cfg : ${JSON.stringify(getCfg)}`)
      }

      return createPromise(`${url}?${objToUrl(params)}`, getCfg)
    },
  },
}
