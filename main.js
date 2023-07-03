let getYear = new Date().getFullYear();
const etoArray = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

// 干支計算関数
function calculateEto(year) {
  const offset = 4; // 干支の開始年（甲子年）の西暦
  const etoIndex = (year - offset) % 12; // 干支のインデックス
  return etoArray[etoIndex];
}

// 表示関数
function displayEtoTable() {
  let table1Body = document.getElementById("table1-body");

  for (let i = 1924; i <= getYear; i++) {
    const eto = calculateEto(i);
    let row1 = table1Body.insertRow(-1);

    let yearCell1 = row1.insertCell(0);
    let eraCell1 = row1.insertCell(1);
    let ageCell1 = row1.insertCell(2);
    let etoCell1 = row1.insertCell(3);

    yearCell1.textContent = i + "年";

    if (i <= 1925) {
      eraCell1.innerHTML = "大正" + (i - 1921) + "年";
    } else if (i <= 1926) {
      eraCell1.innerHTML = "大正15年<br>昭和元年";
    } else if (i <= 1988) {
      eraCell1.innerHTML = "昭和" + (i - 1925) + "年";
    } else if (i <= 1989) {
      eraCell1.innerHTML = "昭和64年<br>平成元年";
    } else if (i <= 2018) {
      eraCell1.innerHTML = "平成" + (i - 1988) + "年";
    } else if (i <= 2019) {
      eraCell1.innerHTML = "平成31年<br>令和元年";
    } else {
      eraCell1.innerHTML = "令和" + (i - 2018) + "年";
    }

    etoCell1.textContent = eto;

    let age = getYear - i + 1;
    ageCell1.textContent = age + "歳";
  }
}

// 干支早見表を表示する
displayEtoTable();
