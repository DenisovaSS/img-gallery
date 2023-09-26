const key = "JkdkRfWrX3J3uTh83hS4HRWYuetZ1I9XrwAWPV11qNo";
const zapros = "pink";
const url = `https://api.unsplash.com/search/photos?query=${zapros}&per_page=30&orientation=landscape&client_id=${key}`;
const pictires = document.querySelectorAll("img");
const boxImg = document.querySelector(".boxImg");
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  picturesCreate(data);
  // console.log(data);
}
getData();
//full/raw/regular/small/small_s3/thumb

function picturesCreate(data) {
  data.results.forEach((onePic, index) => {
    const img = `<div class="cover">
  <img src="${onePic.urls.regular}" alt=${index + 1} class="picture" />
</div>; `;
    boxImg.insertAdjacentHTML("beforeend", img);
  });
}
