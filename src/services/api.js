export const REST = {
  getBoard: function () {
    return fetch(`https://sudoku-back.onrender.com/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`https://sudoku-back.onrender.com/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`https://sudoku-back.onrender.com/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
