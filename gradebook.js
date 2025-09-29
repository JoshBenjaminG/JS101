function getGrade(arg1, arg2, arg3) {
  let grade;
  let score = (arg1 + arg2 + arg3) / 3;

  if (score >= 90 && score <= 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(score + " " + grade);
}

getGrade(95, 90, 93); // 92.666... "A"
getGrade(50, 50, 95); // 65 "D"