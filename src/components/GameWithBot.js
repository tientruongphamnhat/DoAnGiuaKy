import React from 'react';
import { Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Board';

function AlertF(props) {
  const { alertWin } = props;

  if (alertWin === 'youwon') {
    return (
      <Alert className="alert-info" variant="primary">
        <Alert.Heading>congratulations! you won</Alert.Heading>
      </Alert>
    );
  }
  if (alertWin === 'youlose') {
    return (
      <Alert className="alert-info" variant="primary">
        <Alert.Heading>Unfortunately! you lose</Alert.Heading>
      </Alert>
    );
  }

  return null;
}

function calculateWinner(squares, i) {
  let count1 = 0;
  let count2 = 0;
  let chan1 = 0;
  let chan2 = 0;
  const hang = parseInt(i / 20, 10);
  let cot = i % 20;
  let line = [i];

  // Kiểm tra ngang
  for (let temp = cot - 1; temp >= 0; temp -= 1) {
    if (squares[hang * 20 + temp] === squares[i]) {
      line.push(hang * 20 + temp);
      count1 += 1;
    } else if (squares[hang * 20 + temp] != null) {
      chan1 = 1;
      break;
    } else {
      break;
    }
  }

  for (let temp = cot + 1; temp <= 20; temp += 1) {
    if (squares[hang * 20 + temp] === squares[i]) {
      line.push(hang * 20 + temp);
      count2 += 1;
    } else if (squares[hang * 20 + temp] != null) {
      chan2 = 1;
      break;
    } else {
      break;
    }
  }

  if (count1 + count2 >= 4 && (chan1 !== 1 || chan2 !== 1)) {
    return { player: squares[i], line };
  }

  // Kiểm tra hàng dọc
  count1 = 0;
  count2 = 0;
  chan1 = 0;
  chan2 = 0;
  line = [i];

  for (let temp = hang - 1; temp >= 0; temp -= 1) {
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count1 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan1 = 1;
      break;
    } else {
      break;
    }
  }

  for (let temp = hang + 1; temp <= 20; temp += 1) {
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count2 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan2 = 1;
      break;
    } else {
      break;
    }
  }

  if (count1 + count2 >= 4 && (chan1 !== 1 || chan2 !== 1)) {
    return { player: squares[i], line };
  }

  // Kiểm tra hàng chéo trái trên phải dưới
  count1 = 0;
  count2 = 0;
  chan1 = 0;
  chan2 = 0;
  line = [i];

  for (let temp = hang - 1; temp >= 0; temp -= 1) {
    cot -= 1;
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count1 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan1 = 1;
      cot = i % 20;
      break;
    } else {
      cot = i % 20;
      break;
    }
  }

  for (let temp = hang + 1; temp <= 20; temp += 1) {
    cot += 1;
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count2 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan2 = 1;
      cot = i % 20;
      break;
    } else {
      cot = i % 20;
      break;
    }
  }

  if (count1 + count2 >= 4 && (chan1 !== 1 || chan2 !== 1)) {
    return { player: squares[i], line };
  }

  // Kiểm tra hàng chéo trái dưới phải trên
  count1 = 0;
  count2 = 0;
  chan1 = 0;
  chan2 = 0;
  line = [i];

  for (let temp = hang - 1; temp >= 0; temp -= 1) {
    cot += 1;
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count1 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan1 = 1;
      cot = i % 20;
      break;
    } else {
      cot = i % 20;
      break;
    }
  }

  for (let temp = hang + 1; temp <= 20; temp += 1) {
    cot -= 1;
    if (squares[temp * 20 + cot] === squares[i]) {
      line.push(temp * 20 + cot);
      count2 += 1;
    } else if (squares[temp * 20 + cot] != null) {
      chan2 = 1;
      cot = i % 20;
      break;
    } else {
      cot = i % 20;
      break;
    }
  }

  if (count1 + count2 >= 4 && (chan1 !== 1 || chan2 !== 1)) {
    return { player: squares[i], line };
  }

  return null;
}

class GameWithBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertWin: 'notyet'
    };
  }

  handleClick(i) {
    const {
      history,
      stepNumber,
      win,
      xIsNext,
      addCheck,
      setWin,
      changeStepNumber,
      setXIsNext,
      changeHistory
    } = this.props;
    const history1 = history.slice(0, stepNumber + 1);
    const current = history1[history1.length - 1];
    const squares = current.squares.slice();

    if (win || squares[i]) {
      return;
    }

    if (stepNumber < history.length) {
      changeHistory(history1);
    }

    squares[i] = xIsNext ? 'X' : 'O';

    const iswin = calculateWinner(squares, i);

    if (iswin) {
      addCheck(squares, i);
      changeStepNumber(history1.length);
      setXIsNext(!xIsNext);

      this.setState({
        alertWin: 'youwon'
      });
      setWin(iswin);
      return;
    }
    this.randomBot(squares);
  }

  jumpTo(step) {
    const { stepNumber, changeStepNumber, setWin, history } = this.props;
    if (step === history.length - 1) {
      changeStepNumber(step);
      const iswin = calculateWinner(
        history[step].squares,
        history[step].location
      );
      setWin(iswin);

      this.setState({
        alertWin: 'youwon'
      });

      return;
    }
    if (step !== stepNumber) {
      changeStepNumber(step);
      setWin(null);
      this.setState({
        alertWin: 'notyet'
      });
    }
  }

  sortHistory() {
    const { sort } = this.props;
    sort();
  }

  randomBot(preSquares) {
    const {
      history,
      stepNumber,
      setWin,
      addCheck,
      changeStepNumber,
      xIsNext
    } = this.props;

    const history1 = history.slice(0, stepNumber + 1);
    const squares = preSquares;

    let next = Math.floor(Math.random() * 400);

    while (squares[next] !== null) {
      next = Math.floor(Math.random() * 400);
    }

    squares[next] = !xIsNext ? 'X' : 'O';

    addCheck(squares, next);
    changeStepNumber(history1.length);

    const iswin = calculateWinner(squares, next);

    if (iswin) {
      this.setState({
        alertWin: 'youlose'
      });
      setWin(iswin);
    }
  }

  renderAlert() {
    const { alertWin } = this.state;
    return <AlertF alertWin={alertWin} />;
  }

  render() {
    const { history, stepNumber, win, xIsNext, isAscending } = this.props;
    const current = history[stepNumber];

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} @ [${history[move].location % 20}] [${parseInt(
            history[move].location / 20,
            10
          )}]`
        : 'Go to game start';
      return (
        <li key={move.Array}>
          <Button class="btn-info" onClick={() => this.jumpTo(move)}>
            {move === stepNumber ? <b>{desc}</b> : desc}
          </Button>
        </li>
      );
    });

    let status;
    if (win) {
      status = `Winner: ${!xIsNext ? 'X' : 'O'}`;
    } else {
      status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="jumbotron">
        {this.renderAlert()}
        <div>
          <div className="container d-flex mr-4 ">
            <div className="game-board">
              <Board
                winningSquares={win ? win.line : []}
                squares={current.squares}
                onClick={i => this.handleClick(i)}
              />
            </div>
            <div className="ml-3">
              <div>
                <div>{status}</div>
              </div>
              <div className="mt-2">
                <Button class="btn-info" onClick={() => this.sortHistory()}>
                  Sort by: {!isAscending ? 'Ascending' : 'Descending'}
                </Button>
              </div>
              <ol className="mt-3">{isAscending ? moves : moves.reverse()}</ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameWithBot;
