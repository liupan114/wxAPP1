
Page({
   data: {
     posts_content:[
    {
        date: "Sep 18 2016",
        title:"正是虾肥蟹壮时",
        post_img:"/images/post/crab.png",
        author_img:"/images/avatar/1.png",
        content:"菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事。",
        view_num:"122",
        collect_num: "98",
      },
      {
        date: "Nov 25 2016",
        title: "比利.林恩的中场故事",
        post_img: "/images/post/bl.png",
        author_img: "/images/avatar/2.png",
        content: "李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目新片《比利.林恩的中场故事》",
        view_num: "112",
        collect_num: "34",
      },
    ]
     
  },
  imgPath: "/images/...",
  process: function () {
    var date = "Nov 18 2016";
    var date_ele = document.getElementById("id");


  },
  onLoad: function (options) {
//组件渲染数据 posts_contnt

    
       
  },

  onReady: function () {
    //页面渲染完成
    console.log("onready")

  },
})
