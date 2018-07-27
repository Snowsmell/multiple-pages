;(function(global, $) {
  function fetch(options, callback) {
    var opts = $.extend({}, {
      url: '',
      type: 'GET',
      dataType: 'json',
      data: {}
    }, options)

    $.ajax({
      url: opts.url,
      type: opts.type,
      dataType: opts.dataType,
      data: opts.data,
    })
    .done(function(res) {
      callback([null, res])
    })
    .fail(function(error) {
      callback([error])
    })
  }
  
  global['Fetch'] = fetch
}(window, window.jQuery))
