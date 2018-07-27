$(function () {
  //请求到的信息列表
  function getnews() {
    API.getNews({}, function(res) {
      if (!res[0]) {
        var res = res[1]
        if (res.count > 0) {
          var page ='';
          res.results.forEach(function(v,i) {
            var a = v.summary.length > 50 ? "..." : "";
            page +=`
            <li>
              <a href="/@/news/newsdetail.html?id=${v.id}">
                <div class="imgbox">
                  <div><img src="${v.image_url}" alt=""></div>
                </div>
                <div class="text">
                  <h3>${v.title}</h3>
                  <p>${v.summary.substr(0, 50)+a}</p>
                  <span>${v.created_time.replace('T','&nbsp;&nbsp;')}</span>
                  <span class="from">来源 : ${v.author || '华瑞物联'}</span>
                </div>
              </a>
            </li>`
          })
          $('#news-list').html(page)

          clipimg()
        }
      }
    })
  }

  function clipimg() {
    $('#news-list img').each(function (i, v) {
      $(v.parentNode).css({
        'height': $(v).width() * 0.66
      })
    })
  }
  getnews()
})