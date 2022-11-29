import * as React from 'react'
import './App.css';
import GrabStatBlock from "./components/player_statblock"
import {HandlePlayerInput} from "./components/input_handler"
import { HandleDMInput } from './components/input_handler';

function App() {
  return (
    <div className="App">
      <div className='top_section'>
        <div className='player_input_area'>
          <div className='player_story_board' id='players_story_board'></div>
          <textarea className='player_text_input' id='player_text_input'/>
          <button className='submitButton' id='player_submit_button' onClick={HandlePlayerInput} >Submit</button>
        </div>

        
        <div className='dm_input_area'>
          <div className='dm_story_board' id='dm_story_board'></div>
          <textarea className='dm_text_input' id="dm_text_input"/>
          <button className='submitButton' id='dm_input_submitButton' onClick={HandleDMInput}>Submit</button>
        </div>
      </div>
      

      <div className='bottom_section'>
        <div className='players_statblock'>
        </div>
        
        <div className='roll_card_events'>
          
        </div>
      </div>

    </div>
  );
  
}


export default App;
