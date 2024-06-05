let ogrenciler = [
  {
    isim: "Ahmet",
    soyisim: "Yılmaz",
    sinif: 10,
    admin: false,
    notlar: [85, 90, 78],
    enSevdigiDers: "Matematik",
    enSevdigiProgramlamaDili: "JavaScript",
    ozellik1: "Öğrenci Konseyi Üyesi",
    ozellik2: "Resim Sanatına İlgi",
  },
  {
    isim: "Ayşe",
    soyisim: "Demir",
    sinif: 11,
    admin: true,
    notlar: [95, 88, 92],
    enSevdigiDers: "Biyoloji",
    enSevdigiProgramlamaDili: "Python",
    ozellik1: "Müzik Grubu Solisti",
    ozellik2: "Doğa Gezilerine Katılır",
  },
  {
    isim: "Mehmet",
    soyisim: "Kaya",
    sinif: 9,
    admin: false,
    notlar: [70, 80, 75],
    enSevdigiDers: "Tarih",
    enSevdigiProgramlamaDili: "C#",
    ozellik1: "Spor Takımı Kaptanı",
    ozellik2: "Tiyatro Oyuncusu",
  },
  {
    isim: "Zeynep",
    soyisim: "Aydın",
    sinif: 12,
    admin: true,
    notlar: [98, 94, 96],
    enSevdigiDers: "Kimya",
    enSevdigiProgramlamaDili: "Java",
    ozellik1: "Bilim Kulübü Başkanı",
    ozellik2: "Gönüllü Hayvansever",
  },
  {
    isim: "Can",
    soyisim: "Öztürk",
    sinif: 10,
    admin: false,
    notlar: [82, 88, 79],
    enSevdigiDers: "Fizik",
    enSevdigiProgramlamaDili: "Ruby",
    ozellik1: "Robotik Kulübü Üyesi",
    ozellik2: "Fotoğrafçılık Meraklısı",
  },
  {
    isim: "Elif",
    soyisim: "Koç",
    sinif: 11,
    admin: false,
    notlar: [91, 87, 93],
    enSevdigiDers: "Edebiyat",
    enSevdigiProgramlamaDili: "Swift",
    ozellik1: "Yazarlık Kulübü Üyesi",
    ozellik2: "Gezi Tutkunu",
  },
  {
    isim: "Murat",
    soyisim: "Şahin",
    sinif: 10,
    admin: false,
    notlar: [78, 84, 70],
    enSevdigiDers: "Coğrafya",
    enSevdigiProgramlamaDili: "PHP",
    ozellik1: "Müzik Enstrümanlarına İlgili",
    ozellik2: "Gönüllü Çevreci",
  },
  {
    isim: "Selin",
    soyisim: "Yıldız",
    sinif: 12,
    admin: true,
    notlar: [97, 92, 99],
    enSevdigiDers: "Psikoloji",
    enSevdigiProgramlamaDili: "Kotlin",
    ozellik1: "Drama Kulübü Başkanı",
    ozellik2: "Yoga Eğitmeni",
  },
  {
    isim: "Emre",
    soyisim: "Arslan",
    sinif: 9,
    admin: false,
    notlar: [73, 81, 76],
    enSevdigiDers: "Müzik",
    enSevdigiProgramlamaDili: "Go",
    ozellik1: "Gitar Virtüözü",
    ozellik2: "Bisiklet Tutkunu",
  },
];

let toplamSinifOgrenci = [0, 0, 0, 0];

function ogrenciSinifBilgisiGetir() {
  toplamSinifOgrenci = [0, 0, 0, 0];

  ogrenciler.map((ogrenci) => {
    switch (ogrenci.sinif) {
      case 9:
        toplamSinifOgrenci[0] += 1;
        break;
      case 10:
        toplamSinifOgrenci[1] += 1;
        break;
      case 11:
        toplamSinifOgrenci[2] += 1;
        break;
      case 12:
        toplamSinifOgrenci[3] += 1;
        break;
      default:
        console.log("Bir hata ile karşılaşıldı.");
        break;
    }

    //   console.log(ogrenci.sinif);
  });

  for (let i = 0; i < toplamSinifOgrenci.length; i++) {
    console.log(9 + i + ". sınıf öğreni sayısı:", toplamSinifOgrenci[i]);
  }
}
