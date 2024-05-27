let students = [
  {
    name: "Tugay",
    surname: "Tuna",
    class: "JS01",
    admin: true,
    scores: [50, 60, 100],
  },
  {
    name: "Tolga",
    surname: "Tunas",
    class: "JS01",
    admin: false,
    scores: [80, 40, 75],
  },
  {
    name: "Ercan",
    surname: "Yılmaz",
    class: "JS01",
    admin: true,
    scores: [70, 60, 90],
  },
  {
    name: "Ahmet",
    surname: "Yılmaz",
    class: "CS01",
    admin: false,
    scores: [70, 20, 50],
  },
];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

function getAverage(scoreList) {
  let toplam = 0;
  for (let i = 0; i < scoreList.length; i++) {
    toplam += scoreList[i];
  }

  return toplam / scoreList.length;
}

// console.log(getAverage([50, 60]));

students.map((item) => {
  // if (item.class == "JS01") {
  //   console.log(item.name, item.class);
  // }
  let average = getAverage(item.scores);
  if (average >= 50 && item.admin) {
    console.log(item.name, average);
  }
});

function ornek1() {
  console.log("ornek1 fonksiyonu çalıştı!");
}

ornek1();

//arrow function
const ornek2 = () => {
  console.log("ornek2 fonksiyonu çalıştı!");
};

ornek2();
