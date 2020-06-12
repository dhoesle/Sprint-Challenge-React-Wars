// Write your Character component here
import React from 'react'

const Character = (props) => {
    const { characterData } = props
    console.log("Character -> props", props)
    return (
        <div>
            {characterData.name}
        </div>
    )
}

export default Character;