const key = "JkdkRfWrX3J3uTh83hS4HRWYuetZ1I9XrwAWPV11qNo";
const pictires = document.querySelectorAll("img");
const boxImg = document.querySelector(".boxImg");
const form = document.querySelector("form");
const input = document.getElementById("input");
const mGlass = document.querySelector(".fa-magnifying-glass");
let zapros = "dogs";
async function getData(query) {
  const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=${key}`;
  const res = await fetch(url);
  const data = await res.json();
  picturesCreate(data);
  // console.log(data);
}
getData(zapros);
input.focus();
//full/raw/regular/small/small_s3/thumb
function picturesCreate(data) {
  boxImg.innerHTML = "";
  data.results.forEach((onePic, index) => {
    const img = `<div class="cover">
  <img src="${onePic.urls.regular}" alt=${index + 1} class="picture" />
</div> `;
    boxImg.insertAdjacentHTML("beforeend", img);
  });
}
/////Event listener for  form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  doResearch();
});
/////Event listener for button search
mGlass.addEventListener("click", doResearch);
function doResearch() {
  if (input.value) {
    let reachZapros = input.value;
    getData(reachZapros);
  } else {
    alert("try again");
  }
}
