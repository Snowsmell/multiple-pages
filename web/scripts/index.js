
$(function () {
  function IETester(userAgent){
    var UA =  userAgent || navigator.userAgent;
    if(/msie/i.test(UA)){
        return UA.match(/msie (\d+\.\d+)/i)[1];
    }else if(~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')){
        return UA.match(/rv:(\d+\.\d+)/)[1];
    }
    return false;
  }
  if(IETester()&&IETester()<10){
    $('*').css('opacity','1')
  }

  //首屏进来的加载前

  $('#starcloud').on('load',function(){
    $('#modal').remove()
  })
  


  $('#fullpage').fullpage({
    css3: true,
    anchors: ['homepage', 'energysave', 'innovation', 'partner', 'news'],
    menu: ".menu",
    afterLoad: function (anchorLink, index) {
      //首屏幕的动画
      if (!$('.homepage').hasClass('on')) {
        setTimeout(function () {
          $('.homepage').addClass('on')
        }, 2000)
      }
      toChange(index)
    },
    onLeave: function (index, direction) {
      // console.log('离开', index, direction)
    }
  });

  function toDecimal(x) {
    var f = parseFloat(x);
    if (isNaN(f)) {
      return false;
    }
    var f = Math.round(x * 1000) / 1000;
    var s = f.toString();
    var rs = s.indexOf('.');
    if (rs < 0) {
      rs = s.length;
    }
    return s;
  }
  //每屏首次加载后执行的函数
  function toChange(index) {
    switch (index) {
      case 2:
        if (!$('.energysave').hasClass('on')) {
          $('.energysave')
            .addClass('on')
            .find('li b').each(function (i, v) {
              $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
              }, {
                duration: 2000,
                easing: 'swing',
                step: i == 3 ? function (now) {
                  $(this).text(Math.ceil(now))
                } : function (now) {
                  $(this).text(toDecimal(now));
                }
              });
            });
        }
        break;
      case 3:
        if (!$('.innovation').hasClass('on')) {
          $('.innovation').addClass('on')
        }
        break;
      case 4:
        if (!$('.partner').hasClass('on')) {
          $('.partner').addClass('on')
        }
        break;
      case 5:
        if (!$('.news').hasClass('on')) {
          $('.news').addClass('on')
        }
        break;
    }
  }
  //新闻列表,设置轮播
  function getnews() {
    API.getNews({
      page_size: 4
    }, function(res) {
      console.log(res)
      if (!res[0]) {
        var res = res[1]['results']
        if (res.length > 0) {
          var content = '';
          res.forEach(function (v, i) {
            var a = v.summary.length > 40 ? "..." : "";
            content +=
              '<li>' +
              '<a href="/@/news/newsdetail.html?id=' + v.id + '">' +
              '<div class="imgbox">' +
              '<div>' +
              '<img src=' + v.image_url + '>' +
              '</div>' +
              '<h3>' + v.title + '</h3>' +
              '</div>' +
              '<p>' + v.summary.substr(0, 40) + a + '</p>' +
              '<div class="author">' +
              '<span class="date">' + v.created_time.replace('T', '&nbsp;&nbsp;') + '</span>' +
              '<span class="from">来源 : ' + (v.author || '华瑞物联') + '</span>' +
              '</div>' +
              '</a>' +
              '</li>'
          })
          $('#newslist ul').html(content)

          if ($(window).width() > 768) {
            carousel()
          }
          clipimg()
        }
        
      }
    })
  }
  getnews()

  //新闻列表轮播图
  function carousel() {
    var container = document.getElementById('newslist')
    var ul = container.querySelector('ul');
    var lis = ul.querySelectorAll('li');
    var timer = null;
    var index = 1;
    var containerWidth = container.offsetWidth;
    var liWidth = lis[0].offsetWidth;

    for (var i = 0; i < 2; i++) {
      var cloneLi = lis[i].cloneNode(true);
      ul.appendChild(cloneLi)
    }

    function setUlWidth() {
      [].forEach.call(ul.querySelectorAll('li'), function (v, i) {
        v.style.width = liWidth + 'px';
        ul.style.width = liWidth * 6 + 'px' //这里可以优化下性能，不过不是重点
      })
    }
    setUlWidth();

    timer = setInterval(function () {
      $(ul).animate({
        'marginLeft': -liWidth * index++
      }, 500)
      if (index === 5) {
        $(ul).css({
          'marginLeft': 0
        })
        index = 1
      }
    }, 8000)
  }
  //裁剪图片
  function clipimg() {
    $('#newslist img').each(function (i, v) {
      $(v.parentNode).css({
        'height': $(v).width() * 0.66
      })
    })
  }

  //图片微交互
  function shakeAnimation(dom) {
    $(dom).mouseenter(function () {
      $(dom).find('img').each((i,v)=>{
        $(v).css({"transition":"transform .3s "})
      })
      var thisPX = $(this).offset().left;
      var thisPY = $(this).offset().top;
      var boxWidth = $(this).outerWidth();
      var boxHeight = $(this).outerHeight();
      $(this).mousemove(function (event) {
        var mouseX = event.pageX - thisPX;
        var mouseY = event.pageY - thisPY;
        var X;
        var Y;
        if (mouseX > boxWidth / 2) {
          X = mouseX - boxWidth / 2;
        } else {
          X = mouseX - boxWidth / 2;
        }
        if (mouseY > boxHeight / 2) {
          Y = boxHeight / 2 - mouseY;
        } else {
          Y = boxHeight / 2 - mouseY;
        }

        $(this).find('img').each((i, v) => {
          var s = i % 2 === 0 ? (15 + 15 * i) : (15 + 15 * i)
          $(v).css({
            "transition":"none",
            "transform": "translateY(" + X / s + "px) " + "translateX(" + Y / s + "px) "
          })
        })
      });
    });
    $(dom).mouseleave(function () {
      $(this).find('img').each((i,v)=>{
        $(v).css({
          "transition":"transform .3s ",
          "transform": "rotateY(0deg) rotateX(0deg)"
        });
      })

    });
  }
  shakeAnimation('aside')

  //resize
  var timer = null;
  $(window).on('resize', function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      // location.reload()
    }, 300)

  })
});

