const up = document.getElementById("top");
const down = document.getElementById("contact");
const gallery = document.getElementById("gallery");
const ramen = [
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

const mountain = [
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

const fish = [
  {
    src: "./img/IMG_2607.jpeg",
    title: "ヤミハタ（ミーバイ）",
    desc: "淡白な味わいの小型のハタ。",
  },
  {
    src: "./img/IMG_1440.jpeg",
    title: "カサゴ",
    desc: "釣り人のターゲットとして人気の高級魚。",
  },
  {
    src: "./img/IMG_1602.jpeg",
    title: "アオハタ(上)、シロギス(下)",
    desc: "ハタ類の中では比較的手頃で美味/海の女王と呼ばれ非常に美しい",
  },
];

let num = 0;

function slide() {
  if (num === 2) {
    num = 0;
  } else {
    num++;
  }

  document.getElementById("ramen-img").src = ramen[num].src;
  document.getElementById("ramen-title").textContent = ramen[num].title;
  document.getElementById("ramen-desc").textContent = ramen[num].desc;
  document.getElementById("mountain-img").src = mountain[num].src;
  document.getElementById("mountain-title").textContent = mountain[num].title;
  document.getElementById("mountain-desc").textContent = mountain[num].desc;
  document.getElementById("fish-img").src = fish[num].src;
  document.getElementById("fish-title").textContent = fish[num].title;
  document.getElementById("fish-desc").textContent = fish[num].desc;
}

setInterval(slide, 2500);

up.onclick = function () {
  window.scroll({ top: 0, behavior: "smooth" });
};

down.onclick = function () {
  window.scroll({ top: 10000, behavior: "smooth" });
};

gallery.onclick = function () {
  window.scroll({ top: 200, behavior: "smooth" });
};
