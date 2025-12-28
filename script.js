document.getElementById("sepsisForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let temp = Number(document.getElementById("temp").value);
  let heart = Number(document.getElementById("heart").value);
  let bp = Number(document.getElementById("bp").value);
  let resp = Number(document.getElementById("resp").value);

  let score = 0;

  if (temp > 38 || temp < 36) score++;
  if (heart > 90) score++;
  if (bp < 90) score++;
  if (resp > 20) score++;

  let resultText = document.getElementById("resultText");
  let riskLevel = document.getElementById("riskLevel");
  let resultBox = document.getElementById("resultBox");

  resultBox.style.display = "block";

  if (score >= 3) {
    resultText.innerText = "High Risk of Sepsis";
    resultText.style.color = "red";
    riskLevel.innerText = "Immediate concern the doctor";
  } else if (score == 2) {
    resultText.innerText = "Moderate Risk";
    resultText.style.color = "orange";
    riskLevel.innerText = "Non urgent but seen doctor at soon as possible";
  } else {
    resultText.innerText = "Low Risk";
    resultText.style.color = "green";
    riskLevel.innerText = "Doesnot need to see doctor";
  }
});
