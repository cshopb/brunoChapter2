var bTriangle = document.getElementById("bTriangle");
var bFizzBuzz = document.getElementById("bFizzBuzz");
var bChessBoard = document.getElementById("bChessBoard");

function triangle()
{
  triangleSize = Number(document.getElementById("iTriangle").value);
  if (isNaN(triangleSize)) {
      triangleSize = 7;
    }

  string = "";
  for (i = 0; i < triangleSize; i++)
  {
    string += "#";
    console.log(string);
  }
}

function fizzBuzz()
{
  for (i = 1; i <= 100; i++)
  {
    result = "";

    if (i % 3 == 0) {
      result = "Fizz";
    }
    if (i % 5 == 0) {
      result += "Buzz";
    }
    if (result == "") {
      result = i;
    }

    console.log(result);
  }
}

function chess()
{
  var boardSize = Number(document.getElementById("iChessBoard").value);

  if (isNaN(boardSize) || boardSize === 0) {
    boardSize = 8;
  }

  board = "";

  for (i = 0; i < boardSize; i++)
  {
    for (j = 1; j <= boardSize; j++)
    {
      if ((i + j) % 2 == 0) {
        board += "#";
      } else {
        board += " ";
      }
    }
    board += "\n";
  }

  console.log(board);
}

bTriangle.addEventListener("click", triangle, false);
bFizzBuzz.addEventListener("click", fizzBuzz, false);
bChessBoard.addEventListener("click", chess, false);
