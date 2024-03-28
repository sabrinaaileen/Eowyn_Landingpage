//Contact page: Gandalf riddle

let riddleParagraph = document.getElementById("gandalf-riddle");
let quoteOne = document.getElementById("gandalf-quote-one");
let quoteTwo = document.getElementById("pippin-quote-one");
let quoteThree = document.getElementById("gandalf-quote-two");
let portraitParagraph = document.getElementById("portrait-paragraph");
let portrait = document.getElementById("portrait");
let hidePortraitParagraph = document.getElementById("hide-portrait-paragraph");

function showRiddle() {
  quoteOne.innerHTML =
    '"White shores, and beyond, a far green country under a swift sunrise."';
  quoteTwo.innerHTML = '"Well, that is not so bad."';
  quoteThree.innerHTML = '"No. No, it is not."';
  riddleParagraph.style.color = "#000000";
  riddleParagraph.removeEventListener("click", showRiddle);
}
function showPortrait() {
  portrait.style.display = "block";
  hidePortraitParagraph.style.display = "block";
  portraitParagraph.removeEventListener("click", showPortrait);
}
function hidePortrait() {
  portrait.style.display = "none";
  hidePortraitParagraph.style.display = "none";
  portraitParagraph.addEventListener("click", showPortrait);
}

riddleParagraph.addEventListener("click", showRiddle);
portraitParagraph.addEventListener("click", showPortrait);
hidePortraitParagraph.addEventListener("click", hidePortrait);
