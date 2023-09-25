const key = "JkdkRfWrX3J3uTh83hS4HRWYuetZ1I9XrwAWPV11qNo";
const url = `https://api.unsplash.com/search/photos?query=dogs&client_id=${key}`;
//https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo
//`https://api.unsplash.com/search/photos?query=dogs&per_page=30&orientation=landscape&client_id=${key}`;

//   "https://api.unsplash.com/photos/random?query=dogs&client_id=JkdkRfWrX3J3uTh83hS4HRWYuetZ1I9XrwAWPV11qNo";

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  const pictires = document.querySelectorAll("img");
  pictires.forEach((pic, index) => {
    pic.src = `${data.results[index].urls.regular}`;
  });
  //   console.log(data.results[0].urls);
}
getData();
//full/raw/regular/small/small_s3/thumb
