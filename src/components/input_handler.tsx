import React from "react";
import App from "../App";

export function HandlePlayerInput(){
    
    let playersTextInput = document.getElementById("player_text_input") as HTMLInputElement
    let playersStoryBoard = document.getElementById("players_story_board") as HTMLDivElement
    
    let players_story_card = document.createElement("div")
    
    let value = playersTextInput.value
    
    if (value !== ""){
        players_story_card.className = "story_card"
        players_story_card.textContent = value
    
        playersStoryBoard.appendChild(players_story_card)
        value = ""
        playersStoryBoard.scrollTop = playersStoryBoard.scrollHeight
    }
    
        
    
    
    
}

export function HandleDMInput(){
    let dmTextInput = document.getElementById("dm_text_input") as HTMLInputElement
    let dmStoryBoard = document.getElementById("dm_story_board") as HTMLDivElement
    
    let dm_story_card = document.createElement("div")
    
    let value = dmTextInput.value

    if(value !== ""){
        dm_story_card.className = "story_card"
        dm_story_card.textContent = dmTextInput.value
    
        dmStoryBoard.appendChild(dm_story_card)
        dmTextInput.value = ""
        dmStoryBoard.scrollTop = dmStoryBoard.scrollHeight
    }
    
    
}

export default HandlePlayerInput