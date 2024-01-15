function checkMarks() {
  let maths = prompt("Please Enter your maths marks");
  let eng = prompt("Please Enter your English marks");
  let islamiat = prompt("Please Enter your Islamiat marks");
  let urdu = prompt("Please Enter your Urdu Marks");
  let physics = prompt("Please Enter your Physics marks");

  const total =
    Number(maths) +
    Number(eng) +
    Number(islamiat) +
    Number(urdu) +
    Number(physics);

  let percentage = (total * 100) / 500;
  document.getElementById("percent").innerHTML = percentage;

  let grade;

    switch (true) {
      case (percentage > 80):
        grade = "A+";
        break;
      case (percentage > 70):
        grade = "A";
        break;
      case (percentage > 60):
        grade = "B";
        break;
      case (percentage > 50):
        grade = "C";
        break;
      case (percentage > 33):
        grade = "D";
        break;
      default:
        grade = "Fail";
  }

  document.getElementsByClassName("grade")[0].innerHTML = grade;


  document.getElementById("hide1").classList.remove("hide");

}

// getElementById("btn").
