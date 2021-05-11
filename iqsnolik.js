function createTable(size) {
  let table = [];
  for (let i = 0; i < size; i++) {
    table[i] = [];
  }
  for (let i = 0; i < table.length; i++) {
    for (let j = 0; j < size; j++) {
      table[i][j] = "-";
    }
  }

  return table;
}
const size = 3;
const gameTable = createTable(size);
// console.log(gameTable);
function player1Input(table) {
  let x = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  if (table[x][y] === "-") {
    table[x][y] = "1";
  } else {
    //console.log("no");
    player1Input(table);
  }
  console.log(check(gameTable));
}

function player0Input(table) {
  let x = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (size - 1 - 0 + 1)) + 0;
  if (table[x][y] === "-") {
    table[x][y] = "0";
  } else {
    //console.log("no");
    player0Input(table);
  }
  console.log(check(gameTable));
}

function check(table) {
  let sumRow = 0;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      sumRow += table[i][j];
    }
    if (sumRow === size || sumRow === 0) {
      return `Player${sumRow / size} Win by Row`;
    }
    sumRow = 0;
  }

  let sumColumn = 0;
  for (let k = 0; k < size; k++) {
    for (let l = 0; l < size; l++) {
      sumColumn += table[l][k];
    }
    if (sumColumn === size || sumColumn === 0) {
      return `Player${sumColumn / size} Win by Column`;
    }
    sumColumn = 0;
  }

  let sumDiagonal1 = 0;
  for (let a = 0; a < size; a++) {
    for (let b = 0; b < size; b++) {
      if (a === b) {
        sumDiagonal1 += table[a][b];
      }
      //   console.log(sum3);
    }

    // sum3 = 0;
  }
  if (sumDiagonal1 === size || sumDiagonal1 === 0) {
    //console.log(sum3);
    return `Player${sumDiagonal1 / size} Win by Diagonal1`;
  }

  let sumDiagonal2 = 0;
  for (let c = 0; c < size; c++) {
    for (let d = 0; d < size; d++) {
      if (d === size - c - 1) {
        sumDiagonal2 += table[c][d];
      }
      //   sum4 = 0;
      //console.log(sum4);
    }
  }
  if (sumDiagonal2 === size || sumDiagonal2 === 0) {
    return `Player${sumDiagonal2 / size} Win by Diagonal2`;
  }
  
  if(gameTable.some(e => e === "")){
    break;
  }else{
    return "DRAW";
  }

}

player0Input(gameTable);

console.log(gameTable);
