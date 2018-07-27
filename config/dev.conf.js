const host = process.env.HOST || '0.0.0.0'

const port = {
  dev: 3010,
  test: 3012,
  mock: 3014,
  analy: 3016
}

const proxy = [{
  context: ['/order-service/api/v1', '/user-service/api/v1'],
  target: 'http://test.app.hwariot.com',
  changeOrigin: true
}, {
  context: ['/api/v1/'],
  target: 'http://test.oms.hwariot.com',
  changeOrigin: true
}, {
  context: ['/user-service/api/v1/',  '/order-service/api/v1/'],
  target: 'http://192.168.6.68:8080',
  changeOrigin: true
}, {
  context: ['/mock/v1/'],
  target: 'http://192.168.1.100',
  changeOrigin: true
}]

module.exports = {
  host,
  port,
  proxy
}