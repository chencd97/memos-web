function changeHitokoto() {
  $.get("https://v1.hitokoto.cn/", function (data, status) {
    if (status == "success") {
      if (data.from_who != null) {
        // console.log("--------1--------");
        $("#hitokotoStr").text(data.hitokoto + " ——" + data.from_who + " (" + data.from + ")");
        console.log(data.hitokoto + " ——" + data.from_who + " (" + data.from + ")");
      } else {
        // console.log("--------2--------");
        $("#hitokotoStr").text(data.hitokoto + " ——" + data.from);
        console.log(data.hitokoto + " ——" + data.from);
      }
    } else {
      // console.log("--------3--------");
      $("#hitokotoStr").text("获取出错！");
    }
  });
}

// console.log("10秒后获取一言数据...");

// setTimeout(function () {
//   changeHitokoto();
//   setInterval(changeHitokoto, 20000);
// }, 10000);

// window.onload = function () {
//   setTimeout(function () {
//     changeHitokoto();
//     setInterval(changeHitokoto, 20000);
//   }, 5000);
// };

// window.addEventListener("load", () => {
//   setTimeout(function () {
//     changeHitokoto();
//     setInterval(changeHitokoto, 20000);
//   }, 5000);
// });
