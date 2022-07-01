var factList = [
  "Six out of 10 of all unintended pregnancies end in an induced abortion.", "Around 45% of all abortions are unsafe, of which 97% take place in developing countries.",
  "Lack of access to safe, timely, affordable and respectful abortion care is a critical public health and human rights issue.", "13 U.S states have trigger laws in place that are crafted to go into effect with the fall of Roe: Arkansas, Idaho, Kentucky, Louisiana, Mississippi, Missouri, North Dakota, South Dakota, Oklahoma, Tennessee, Texas, Utah, and Wyoming.", "16 U.S states and D.C have laws in place to protect the right to abortion: California, Colorado, Connecticut, Delaware, Hawaii, Illinois, Maine, Maryland, Massachusetts, Nevada, New Jersey, New York, Oregon, Rhode Island, Vermont, and Washington", "Black women were more than 3.6 times more likely to have an abortion in 2019 than white women (CDC).", "An estimated 25 million unsafe abortions take place each year, the vast majority of them in developing countries.", "An estimated 1 in 4 pregnancies end in an abortion every year."]; 

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
