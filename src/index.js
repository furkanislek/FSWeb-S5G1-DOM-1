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

anchors.forEach((e,i = 1) => {
  e.classList.add("italic")
  e.textContent = siteContent["nav"]["nav-item-"+i];
  i++;
});

// anchors[0].textContent = "Servisler";
// anchors[1].textContent = "Ürünler";
// anchors[2].textContent = "Vizyon";
// anchors[3].textContent = "Özellikler";
// anchors[4].textContent = "Hakkımızda";
// anchors[5].textContent = "İletişim";

sirketLogo.setAttribute("src", siteContent.images["logo-img"]);

h1BuDom.textContent = siteContent.cta.h1;

BtnBaslama.textContent = siteContent.cta.button;

altImg.setAttribute("src", siteContent.images["cta-img"]);

// h4Text.forEach((e, i = 1) => {
//   e.textContent = siteContent["nav"]["nav-item-"+i];
//   i++
// })

h4Text[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
h4Text[1].textContent = siteContent["ana-içerik"]["ürünler-h4"];
h4Text[2].textContent = siteContent["ana-içerik"]["vizyon-h4"]
h4Text[3].textContent = siteContent["ana-içerik"]["özellikler-h4"]
h4Text[4].textContent = siteContent["ana-içerik"]["hakkımızda-h4"]
h4Text[5].textContent = siteContent.iletisim["iletişim-h4"];

pTexts[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];

pTexts[1].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

pTexts[2].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

pTexts[3].textContent = siteContent["ana-içerik"]["özellikler-içerik"];

pTexts[4].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

pTexts[5].textContent = siteContent.iletisim.adres;

pTexts[6].textContent = siteContent.iletisim.telefon;

pTexts[7].textContent = siteContent.iletisim.email;

middleImg.setAttribute("src", siteContent.images["accent-img"]);

footerAnchor.classList.add("bold");
footerAnchor.textContent = siteContent.footer.copyright;
