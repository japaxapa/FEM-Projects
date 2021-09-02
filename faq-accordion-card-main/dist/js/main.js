const d1 = document.querySelector(".d1");
const dc1 = document.querySelector(".dc1");
const d1h2 = document.querySelector(".d1h2");

const d2 = document.querySelector(".d2");
const dc2 = document.querySelector(".dc2");
const d2h2 = document.querySelector(".d2h2");

const d3 = document.querySelector(".d3");
const dc3 = document.querySelector(".dc3");
const d3h2 = document.querySelector(".d3h2");

const d4 = document.querySelector(".d4");
const dc4 = document.querySelector(".dc4");
const d4h2 = document.querySelector(".d4h2");

const d5 = document.querySelector(".d5");
const dc5 = document.querySelector(".dc5");
const d5h2 = document.querySelector(".d5h2");



d1.addEventListener("click", function() {
  if (d1h2.classList.contains("active")) {
    d1h2.classList.remove("active");
    dc1.classList.remove("opened");
    dc1.classList.add("closed");
  } else {
    d1h2.classList.add("active");
    dc1.classList.remove("closed");
    dc1.classList.add("opened");
  }
});

d2.addEventListener("click", function() {
  if (d2h2.classList.contains("active")) {
    d2h2.classList.remove("active");
    dc2.classList.remove("opened");
    dc2.classList.add("closed");
  } else {
    d2h2.classList.add("active");
    dc2.classList.remove("closed");
    dc2.classList.add("opened");
  }
});

d3.addEventListener("click", function() {
  if (d3h2.classList.contains("active")) {
    d3h2.classList.remove("active");
    dc3.classList.remove("opened");
    dc3.classList.add("closed");
  } else {
    d3h2.classList.add("active");
    dc3.classList.remove("closed");
    dc3.classList.add("opened");
  }
});

d4.addEventListener("click", function() {
  if (d4h2.classList.contains("active")) {
    d4h2.classList.remove("active");
    dc4.classList.remove("opened");
    dc4.classList.add("closed");
  } else {
    d4h2.classList.add("active");
    dc4.classList.remove("closed");
    dc4.classList.add("opened");
  }
});

d5.addEventListener("click", function() {
  if (d5h2.classList.contains("active")) {
    d5h2.classList.remove("active");
    dc5.classList.remove("opened");
    dc5.classList.add("closed");
  } else {
    d5h2.classList.add("active");
    dc5.classList.remove("closed");
    dc5.classList.add("opened");
  }
});
