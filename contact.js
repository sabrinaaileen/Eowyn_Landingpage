//Contact page: Gandalf riddle

let riddleParagraph = document.getElementById("gandalf-riddle");
let quoteOne = document.getElementById("gandalf-quote-one");
let quoteTwo = document.getElementById("pippin-quote-one");
let quoteThree = document.getElementById("gandalf-quote-two");

function showRiddle() {
  quoteOne.innerHTML =
    '"White shores, and beyond, a far green country under a swift sunrise."';
  quoteTwo.innerHTML = '"Well, that is not so bad."';
  quoteThree.innerHTML = '"No. No, it is not."';
  riddleParagraph.style.color = "#000000";
  riddleParagraph.removeEventListener("click", showRiddle);
}

riddleParagraph.addEventListener("click", showRiddle);
