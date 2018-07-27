const url = {
  'dev': '',
  'sit': 'http://test.app.hwariot.com',
  'uat': 'http://test.app.hwariot.com',
  'prod': 'https://app.hwariot.com'
}

const host = url[process.env.ENV_TYPE] || ''

/**
 * 获取API接口 host/{service}/{version}
 * 
 * @param {[string]} service 接口服务名称 ['user-service']
 * @param {[string]} version 接口版本号 ['v1'], 若为空则 = null
 */
const apiURL = function (service, version = 'v1') {
  return version === null ? `${host}/${service}` : `${host}/${service}/api/${version}`
}

export {
  url,
  host,
  apiURL
}
