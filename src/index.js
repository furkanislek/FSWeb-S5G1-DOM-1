const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const anchors = document.querySelectorAll("a");
const sirketLogo = document.querySelector("#logo-img");
const h1BuDom = document.querySelector("h1");
const BtnBaslama = document.querySelector("button");
const altImg = document.querySelector("#cta-img");
const h4Text = document.querySelectorAll("h4");
const pTexts = document.querySelectorAll("p");
const middleImg = document.querySelector(".middle-img");
const footerAnchor = document.querySelectorAll("a")[6];

anchors[0].classList.add("italic");
anchors[1].classList.add("italic");
anchors[2].classList.add("italic");
anchors[3].classList.add("italic");
anchors[4].classList.add("italic");
anchors[5].classList.add("italic");
anchors[0].textContent = "Servisler";
anchors[1].textContent = "Ürünler";
anchors[2].textContent = "Vizyon";
anchors[3].textContent = "Özellikler";
anchors[4].textContent = "Hakkımızda";
anchors[5].textContent = "İletişim";

sirketLogo.setAttribute("src", "../mocks/img/logo.png");

h1BuDom.textContent = "Bu DOM Mükemmel";

BtnBaslama.textContent = "Başlayın";

altImg.setAttribute("src", "../mocks/img/cta.png");

h4Text[0].textContent = "Özellikler";
h4Text[1].textContent = "Hakkında";
h4Text[2].textContent = "Servisler";
h4Text[3].textContent = "Ürünler";
h4Text[4].textContent = "Vizyon";
h4Text[5].textContent = "İletişim";

pTexts[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

pTexts[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

pTexts[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

pTexts[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

pTexts[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

pTexts[5].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";

pTexts[6].textContent = "+90 (123) 456-7899";

pTexts[7].textContent = "satis@birsirketsitesi.com.tr";

middleImg.setAttribute("src", "../mocks/img/accent.png");

footerAnchor.classList.add("bold");
footerAnchor.textContent = "Copyright Bir Şirket Sitesi 2022";
