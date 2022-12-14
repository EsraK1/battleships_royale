import {SquareOpponent } from "./SquareOpponent";
import { Computer } from "./Computer";
import Confetti from "react-confetti";
import './ModalPopUp.css';
import { socket } from "./RunGame";
import { useEffect } from "react";
import { Chatbox } from "../Multiplayer/Chatbox";

// variable to make confetti go off when Player 1 wins
var winnerConfetti


export function GameFlow(props) {
        //checks for ships hit and destroys them (Set property to hitfull)

        var newplay1Grid;

        var winningSquareCount = 17
        if(props.testState === 'test'){winningSquareCount = 3}

        var countship2 = props.play1Grid.filter((obj) => obj.shipStatus === "ship2" && obj.hitStatus === "hit").length;
        if(countship2 === 2){
          newplay1Grid = props.play1Grid.map((square, index)=>square.shipStatus === "ship2" ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay1Grid(newplay1Grid)
        }
        var countship31 = props.play1Grid.filter((obj) => obj.shipStatus === "ship31" && obj.hitStatus === "hit").length;
        if(countship31 === 3){
          newplay1Grid = props.play1Grid.map((square, index)=>square.shipStatus === "ship31" ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay1Grid(newplay1Grid)
        }
        var countship32 = props.play1Grid.filter((obj) => obj.shipStatus === "ship32" && obj.hitStatus === "hit").length;
        if(countship32 === 3){
          newplay1Grid = props.play1Grid.map((square, index)=>square.shipStatus === "ship32" ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay1Grid(newplay1Grid)
        }
        var countship4 = props.play1Grid.filter((obj) => obj.shipStatus === "ship4" && obj.hitStatus === "hit").length;
        if(countship4 === 4){
          newplay1Grid = props.play1Grid.map((square, index)=>square.shipStatus === "ship4" ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay1Grid(newplay1Grid)
        }
        var countship5 = props.play1Grid.filter((obj) => obj.shipStatus === "ship5" && obj.hitStatus === "hit").length;
        if(countship5 === 5){
          newplay1Grid = props.play1Grid.map((square, index)=>square.shipStatus === "ship5" ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay1Grid(newplay1Grid)
        }
    
        var newplay2Grid;
    
         countship2 = props.play2Grid.filter((obj) => (obj.shipStatus === "ship2C" || obj.shipStatus === "ship2") && obj.hitStatus === "hit").length;
        if(countship2 === 2){
          newplay2Grid = props.play2Grid.map((square, index)=>(square.shipStatus === "ship2C" || square.shipStatus === "ship2") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay2Grid(newplay2Grid)
        }
         countship31 = props.play2Grid.filter((obj) => (obj.shipStatus === "ship31C" || obj.shipStatus === "ship31") && obj.hitStatus === "hit").length;
        if(countship31 === 3){
          newplay2Grid = props.play2Grid.map((square, index)=>(square.shipStatus === "ship31C" || square.shipStatus === "ship31") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay2Grid(newplay2Grid)
        }
         countship32 = props.play2Grid.filter((obj) => (obj.shipStatus === "ship32C" || obj.shipStatus === "ship32") && obj.hitStatus === "hit").length;
        if(countship32 === 3){
          newplay2Grid = props.play2Grid.map((square, index)=>(square.shipStatus === "ship32C" || square.shipStatus === "ship32") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay2Grid(newplay2Grid)
        }
         countship4 = props.play2Grid.filter((obj) => (obj.shipStatus === "ship4C" || obj.shipStatus === "ship4") && obj.hitStatus === "hit").length;
        if(countship4 === 4){
          newplay2Grid = props.play2Grid.map((square, index)=>(square.shipStatus === "ship4C" || square.shipStatus === "ship4") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay2Grid(newplay2Grid)
        }
         countship5 = props.play2Grid.filter((obj) => (obj.shipStatus === "ship5C" || obj.shipStatus === "ship5") && obj.hitStatus === "hit").length;
        if(countship5 === 5){
          newplay2Grid = props.play2Grid.map((square, index)=>(square.shipStatus === "ship5C" || square.shipStatus === "ship5") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay2Grid(newplay2Grid)
        }
    
         var newplay3Grid;
    
         countship2 = props.play3Grid.filter((obj) => (obj.shipStatus === "ship2C" || obj.shipStatus === "ship2") && obj.hitStatus === "hit").length;
        if(countship2 === 2){
          newplay3Grid = props.play3Grid.map((square, index)=>(square.shipStatus === "ship2C" || square.shipStatus === "ship2") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay3Grid(newplay3Grid)
        }
         countship31 = props.play3Grid.filter((obj) => (obj.shipStatus === "ship31C" || obj.shipStatus === "ship31") && obj.hitStatus === "hit").length;
        if(countship31 === 3){
          newplay3Grid = props.play3Grid.map((square, index)=>(square.shipStatus === "ship31C" || square.shipStatus === "ship31") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay3Grid(newplay3Grid)
        }
         countship32 = props.play3Grid.filter((obj) => (obj.shipStatus === "ship32C" || obj.shipStatus === "ship32") && obj.hitStatus === "hit").length;
        if(countship32 === 3){
          newplay3Grid = props.play3Grid.map((square, index)=>(square.shipStatus === "ship32C" || square.shipStatus === "ship32") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay3Grid(newplay3Grid)
        }
         countship4 = props.play3Grid.filter((obj) => (obj.shipStatus === "ship4C" || obj.shipStatus === "ship4") && obj.hitStatus === "hit").length;
        if(countship4 === 4){
          newplay3Grid = props.play3Grid.map((square, index)=>(square.shipStatus === "ship4C" || square.shipStatus === "ship4") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay3Grid(newplay3Grid)
        }
         countship5 = props.play3Grid.filter((obj) => (obj.shipStatus === "ship5C" || obj.shipStatus === "ship5") && obj.hitStatus === "hit").length;
        if(countship5 === 5){
          newplay3Grid = props.play3Grid.map((square, index)=>(square.shipStatus === "ship5C" || square.shipStatus === "ship5") ? { ...square, hitStatus: 'hitfull' } : square)
          props.setPlay3Grid(newplay3Grid)
        }


  function checkGameWinner() {

    let player1Hits = props.play1Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;
    let player2Hits = props.play2Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;
    let player3Hits = props.play3Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;
    console.log("Num Player 1 ships hit:" + player1Hits);
    console.log("Num Comp 1 ships hit:" + player2Hits);
    console.log("Num Comp 2 ships hit:" + player3Hits)
    
    if (
      (player1Hits >= winningSquareCount && player2Hits >= winningSquareCount) ||
      (player2Hits >= winningSquareCount && player3Hits >= winningSquareCount) ||
      (player3Hits >= winningSquareCount && player1Hits >= winningSquareCount)
    ) {

      let turnHeader = document.getElementById('turnHeader')
      turnHeader.style.display = 'none'
      if(props.playState === 'Singleplayer'){
        if (player1Hits < winningSquareCount) {
          // set the variable 'winnerConfetti' so confetti can go off when Player 1 wins!
          winnerConfetti = props.opponentNames[props.playerIndexState]
          // CallsWinner(props.opponentNames[props.playerIndexState])
        }
        if (player2Hits < winningSquareCount) {
          winnerConfetti = props.opponentNames[props.opponent1Index]
          // CallsWinner(props.opponentNames[props.opponent1Index])
        }
        if (player3Hits < winningSquareCount) {
          winnerConfetti = props.opponentNames[props.opponent2Index]
          // CallsWinner(props.opponentNames[props.opponent2Index])
        }}
 
      if ( props.turnState !== 'game-over'){
        socket.emit('gameIsOver', props.roomId)
        
      }
      return true;
    }

    return false;
  }

  socket.on('gameOver', () => {

    let player1Hits = props.play1Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;
    let player2Hits = props.play2Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;
    let player3Hits = props.play3Grid.filter(
      (square) => square.hitStatus === "hitfull"
    ).length;

    if (player1Hits < winningSquareCount) {
      // set the variable 'winnerConfetti' so confetti can go off when Player 1 wins!
      winnerConfetti = props.opponentNames[props.playerIndexState]
      // CallsWinner(props.opponentNames[props.playerIndexState])
    }
    if (player2Hits < winningSquareCount) {
      winnerConfetti = props.opponentNames[props.opponent1Index]
      // CallsWinner(props.opponentNames[props.opponent1Index])
    }
    if (player3Hits < winningSquareCount) {
      winnerConfetti = props.opponentNames[props.opponent2Index]
      // CallsWinner(props.opponentNames[props.opponent2Index])
    }
    props.setTurnState('game-over')
  })


  // This function returns confetti with the modal popup that shows who the winner is.
  function CallsWinner (player) {

    return (
    <div>  
      <Confetti/>
        <div className='modalContainer'>
          <div className='modalRight'>
            <div className='content' id='winnerCard'>
              {player === props.username ? <h1> ???? You are the winner! ???? </h1> : <h1>  {player} is the winner! ????</h1>}
              <br></br>
              {playAgainBtn()}
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
    </div>
  );
  }

  function playAgainBtn(){
      return(<button className="PlayAgain" onClick ={ () => {

        socket.emit('close-room', props.roomId)
        window.location.reload(true);
      }
      }>Play Again</button>)
    }
    
  function playwin1(){
      if (props.turnState === props.username && props.turnState !== "game-over"){
        
        return(
        <h1 className="Player1turn" id='turnHeader'>It's your turn</h1>)
      }
      else if (props.turnState !== props.username && props.turnState !== "game-over") {
        
        return (<h1 className="playerTurn" id='turnHeader'>It's {props.turnState}'s turn</h1>)
      }}



  return(
  <div id='BoardsContainer'>
    {playwin1()}
    {props.turnState === 'game-over' ? CallsWinner(winnerConfetti) : ''}
    {props.playState === 'Singleplayer' ? <Computer turnState={props.turnState} checkGameWinner={checkGameWinner} setTurnState={props.setTurnState} grid1Array={props.play1Grid} setGrid1Array={props.setPlay1Grid} grid2Array={props.play2Grid} setGrid2Array={props.setPlay2Grid} grid3Array={props.play3Grid} setGrid3Array={props.setPlay3Grid} testState={props.testState}/> : ""}
    {/* computer function imports grids and turns state, and functions of setting grids and turn state */}
    <container className='responsive-grids'>
      <column>
        {props.playState === 'Singleplayer' ? <h1 className="player-board-title">Computer 1's Board</h1> : <h1 className="player-board-title">{props.opponentNames[props.opponent1Index]}'s board</h1>}
        <div className={`player2 board ${props.playerStatuses[props.opponent1Index]}`} id="GameContainer2">
          {props.play2Grid.map(
            (square, index) => (<SquareOpponent square={square} key={`player2Board_${index}`} index={index} gridArray={props.play2Grid} setGridArray={props.setPlay2Grid} setTurnState={props.setTurnState} turnState={props.turnState} sendGrids={props.sendGrids} checkGameWinner={checkGameWinner}  playState={props.playState} sendData={props.sendData} username={props.username} setUsername={props.setUsername} player='opponent' number='play2' player1Grid={props.play1Grid}/>)
            )}
        </div>
      </column>
      <column>
        {props.playState === 'Singleplayer' ? <h1 className="player-board-title">Computer 2's Board</h1> : <h1 className="player-board-title">{props.opponentNames[props.opponent2Index]}'s board</h1>}
        <div className={`player3 board ${props.playerStatuses[props.opponent2Index]}`}  id="GameContainer3">
          {props.play3Grid.map(
            (square, index) => (<SquareOpponent square={square} key={`player3Board_${index}`} index={index} gridArray={props.play3Grid} setGridArray={props.setPlay3Grid} setTurnState={props.setTurnState} turnState={props.turnState} sendGrids={props.sendGrids} checkGameWinner={checkGameWinner} playState={props.playState} sendData={props.sendData} username={props.username} setUsername={props.setUsername} player='opponent' number='play3' player1Grid={props.play1Grid}/>)
            )}
        </div>
      </column>
    </container>
    <container className='responsive-grids'>
      <column className = 'your-board-div'>
        {props.playerStatuses[props.playerIndexState] === 'out' ? <h1 className="destroyed-ship-message" >All of your ships have <br></br> been destroyed!</h1> : <h1 className="player-board-title">Your Board</h1>}
        <div className={`player1 board ${props.playerStatuses[props.playerIndexState]}`} id="GameContainer1">
          {props.play1Grid.map( // maps through the array and makes a square for each of the elements in the array.
          (square, index) => (<SquareOpponent square={square} player1Grid={props.play1Grid} key={`player3Board_${index}`} index={index} gridArray={props.play3Grid} setGridArray={props.setPlay3Grid} setTurnState={props.setTurnState} turnState={props.turnState} sendGrids={props.sendGrids} checkGameWinner={checkGameWinner} playState={props.playState} sendData={props.sendData} username={props.username} setUsername={props.setUsername} number='play1'  player='player' 

          />)
            )}
          </div>
        </column>
      </container>
      {props.playState === 'Multiplayer' ? <Chatbox roomId={props.roomId} username={props.username} messages={props.messages} setMessages={props.setMessages}/> : ''}
    </div>
  );
}