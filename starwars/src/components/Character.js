// Write your Character component here
import React from 'react'
import Container from './Container'
import ImgContainer from './ImgContainer'
import TextContainer from './TextContainer'

const Character = (props) => {
    const { characterData } = props
    return (
        <Container>
            <ImgContainer className='img-container'>
                <img alt={characterData.name} className='character-picture' src={characterData.image}></img>
            </ImgContainer>
            <TextContainer className='text-container'>
                <h1>
                    {characterData.name}
                </h1>
                <p>
                    Species: {characterData.species} {characterData.gender}
                </p>
                <p>
                    Current Location: {characterData.location.name}   Location of Origin: {characterData.origin.name}
                </p>
                <p>
                    Status: {characterData.status}
                </p>
            </TextContainer>
        </Container>
    )
}

export default Character;