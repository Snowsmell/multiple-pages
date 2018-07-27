$(function () {
  function getstaffs() {
    API.getStaff({}, function (res) {
      if (!res[0]) {
        var res = res[1]
        if (res.count > 0) {
          var page = '';
          res.results.forEach((v, i) => {
            var a = v.summary.length > 40 ? "..." : "";
            page += `
          <li>
            <a href="/@/about/staffdetail.html?id=${v.id}">
              <div class="imgbox">
                <div><img src="${v.image_url}" alt=""></div>
              </div>
              <div class="text">
                <h3>${v.title}</h3>
                <p>${v.summary.substr(0, 40) + a}</p>
                <span>${v.created_time}</span>
              </div>
            </a>
          </li>`
          })
          $('#staff-list').html(page)
        }

        clipimg()
      }
    })
  }
  function clipimg() {
    $('#staff-list img').each(function (i, v) {
      $(v.parentNode).css({
        'height': $(v).width() * 0.66
      })
    })
  }
  getstaffs()
})