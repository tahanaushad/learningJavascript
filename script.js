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

  if (percentage > 100) {
    document.getElementsByClassName("grade").innerHTML = "Marks are invalid";
  } else if (percentage > 80) {
    document.getElementsByClassName("grade").innerHTML = "A+";
  } else if (percentage > 70) {
    document.getElementsByClassName("grade").innerHTML = "A";
  } else if (percentage > 60) {
    document.getElementsByClassName("grade").innerHTML = "B";
  } else if (percentage > 50) {
    document.getElementsByClassName("grade").innerHTML = "C";
  } else if (percentage > 33) {
    document.getElementsByClassName("grade").innerHTML = "D";
  } else {
    document.getElementsByClassName("grade").innerHTML = "Fail";
  }

  document.getElementById("hide1").classList.remove("hide");
  
}

// getElementById("btn").
