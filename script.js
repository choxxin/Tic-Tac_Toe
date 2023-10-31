console.log("Welcome to TIC TAC TOE ");
let audioTurn = new Audio("punch-1-166694.mp3");
let gameover = new Audio("mahesh-dalle-ringtone-tkkb.mp3");

let turn = "X";
let isgameover = false;
let music = new Audio("Heartbreaking(chosic.com).mp3");
music.play();
//Function to change the turn
const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};
//Function to check for a win
const checkwin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "  " + "WON";
      gameover.play();
      music.pause();
      isgameover = true;

      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "400px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "30vw";
    }
  });
};

//AGme logic
//music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkwin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

//add on click listner to reset button
reset.addEventListener("click", () => {
  music.play();
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  gameover.pause();

  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "200px";
});
