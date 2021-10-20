const up = document.getElementById("top");
const down = document.getElementById("contact");
const picArray = [
  {
    src: "./img/IMG_1999.jpeg",
    title: "吉村家",
    desc: "家系ラーメンの総本山です。",
  },
  {
    src: "./img/IMG_2267.jpeg",
    title: "丿貫",
    desc: "上質で鮮度の高い煮干しを使用した濃厚な煮干しラーメンのお店です。",
  },
  {
    src: "./img/IMG_2371.jpeg",
    title: "時雨",
    desc: "無調化スープ、自家製麺を使った淡麗系ラーメンです。",
  },
];

const mountainPic = [
  {
    src: "./img/IMG_1932.jpeg",
    title: "鋸山",
    desc: "千葉県浜金谷にある地獄覗きで有名な山です。",
  },
  {
    src: "./img/IMG_0119.jpeg",
    title: "塔ノ岳",
    desc: "丹沢にある標高1491mの山です。",
  },
  {
    src: "./img/IMG_2359.jpeg",
    title: "景信山",
    desc: "高尾山の隣にある時透無一郎の出身氏としても知られる山です。",
  },
];

let num = 0;

function slide() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }

  document.getElementById("ramen-img").src = picArray[num].src;
  document.getElementById("ramen-title").textContent = picArray[num].title;
  document.getElementById("ramen-desc").textContent = picArray[num].desc;
  document.getElementById("mountain-img").src = mountainPic[num].src;
  document.getElementById("mountain-title").textContent =
    mountainPic[num].title;
  document.getElementById("mountain-desc").textContent = mountainPic[num].desc;
}

setInterval(slide, 2000);

up.onclick = function () {
  window.scroll({ top: 0, behavior: "smooth" });
};

down.onclick = function () {
  window.scroll({ top: 1000, behavior: "smooth" });
};
