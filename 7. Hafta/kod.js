let name = "tugay";
let admin = true;

let students = [
  {
    name: "Tugay",
    surname: "Tuna",
    class: "JS01",
    admin: admin,
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

console.log(students);

function getAverage(scoreList) {
  let toplam = 0;
  for (let i = 0; i < scoreList.length; i++) {
    toplam += scoreList[i];
  }

  return toplam / 3;
  //   return (score1 + score2 + score3) / 3;
}

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name, getAverage(students[i].scores));
}
