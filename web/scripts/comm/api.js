;(function(global, $) {
  /* @if env='production' **
  var apiURL = 'https://oms.hwariot.com'
  /* @endif */
  /* @if env!='production' **
  var apiURL = 'http://test.oms.hwariot.com'
  /* @endif */
  var newAPI = apiURL + '/api/v1/news/'
  var staffAPI = apiURL + '/api/v1/staff-style-list/'
  
  function getNews(condition, callback) {
    var data = $.extend({}, condition)
    return Fetch({
      url: newAPI,
      data: data
    }, callback)
  }

  function getNewsDetail(id, callback) {
    return Fetch({
      url: newAPI + id + '/'
    }, callback)
  }

  function getStaff(condition, callback) {
    var data = $.extend({}, condition)
    return Fetch({
      url: staffAPI,
      data: data
    }, callback)
  }

  global['API'] = {
    getNews: getNews,
    getNewsDetail: getNewsDetail,
    getStaff: getStaff
  }
  
}(window, window.jQuery))
