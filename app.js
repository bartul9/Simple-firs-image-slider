"use strict";

const body = document.querySelector("body");

const previous = document.querySelector("#previous");

const next = document.querySelector("#next");

const images = [
  "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1422&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1447&q=80",
  "https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80",
  "https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1522037576655-7a93ce0f4d10?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1471289549423-04adaecfa1f1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1553&q=80",
  "https://images.unsplash.com/photo-1531682607150-08b2476a545a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1484&q=80",
  "https://images.unsplash.com/photo-1597073795495-add09ef2cb8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1594950195709-a14f66c242d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1552176625-e47ff529b595?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
];

let clickCount = 0;

next.addEventListener("click", function () {
  body.style.backgroundImage = `url(${images[clickCount]})`;
  if (clickCount === images.length - 1) {
    clickCount -= images.length;
  }
  return (clickCount += 1);
});

previous.addEventListener("click", function () {
  body.style.backgroundImage = `url(${images[clickCount]})`;
  if (clickCount === 0) {
    clickCount += images.length;
  }

  return (clickCount -= 1);
});
