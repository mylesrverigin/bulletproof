import React from "react";
function GrabStatBlock(){
    let statblock = new Map([
        ["str",0],
        ["dex",0],
        ["con",0],
        ["int",0],
        ["wis",0],
        ["cha",0]
      ])
    return (
        <div className='player_statblock'>
        <div>Strength: {statblock.get("str")}</div>
        <div>Dexterity: {statblock.get("dex")}</div>
        <div>Constitution: {statblock.get("con")}</div>
        <div>Intelligence: {statblock.get("int")}</div>
        <div>Wisdom: {statblock.get("wis")}</div>
        <div>Charisma: {statblock.get("cha")}</div>
      </div>
    )
}

export default GrabStatBlock