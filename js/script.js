const header = document.querySelector("header");

const form = document.querySelector("form");

const colorPicker = document.querySelectorAll("input[type='color']");

// form.addEventListener("click", function (e) {
//   e.preventDefault();
// });

const closeBtn = document.querySelector("#close-btn");

const openBtn = document.querySelector("#hamburger");

const uploadBtn = document.querySelectorAll("input[type=file]");

uploadBtn.forEach(function (upload) {
  upload.addEventListener("change", function (e) {
    // getting the filename
    const fileName = e.currentTarget.files[0].name;

    // getting the file extension

    const regex = /\.[a-zA-Z0-9]+$/;
    const extension = fileName.match(regex);

    // Shortening the filename is too long
    const truncateName = truncateText(fileName, 10);

    e.currentTarget.nextElementSibling.textContent = truncateName + extension;

    // console.log(e.currentTarget.nextElementSibling);
  });
});

colorPicker.forEach(function (color) {
  color.addEventListener("change", function (e) {
    const value = e.target.value;
    e.target.nextElementSibling.textContent = value;
    console.log(value);
  });
});

openBtn.addEventListener("click", function () {
  document.body.style.overflowY = "hidden";
  header.classList.add("nav-open");
});

closeBtn.addEventListener("click", function () {
  header.classList.remove("nav-open");
  document.body.style.overflowY = "auto";
});

function truncateText(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}
