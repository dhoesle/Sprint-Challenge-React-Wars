// Write your Character component here
import React from 'react'
import Container from './Container'
import ImgContainer from './ImgContainer'
import TextContainer from './TextContainer'

const Character = (props) => {
    const { characterData } = props
    const makeStyles = () => {
        return {
            h1:{
                fontSize: '50px',
                textAlign: 'left',
                textShadow: '1px 1px 5px #fff',
                color: '#443e3e'
            },
            p:{
                fontSize: '25px',
                color: '#443e3e'

            }
        }
    }
    return (
        <Container>
            <ImgContainer className='img-container'>
                <img alt={characterData.name} className='character-picture' src={characterData.image}></img>
            </ImgContainer>
            <TextContainer className='text-container'>
                <h1 className='character-name' style={makeStyles().h1}>
                    {characterData.name}
                </h1>
                <p style={makeStyles().p}>
                    Species: {characterData.species} {characterData.gender}
                </p>
                <p style={makeStyles().p}>
                    Current Location: {characterData.location.name}
                </p>
                <p style={makeStyles().p}>
                    Location of Origin: {characterData.origin.name}
                </p>
                <p style={makeStyles().p}>
                    Status: {characterData.status}
                </p>
            </TextContainer>
        </Container>
    )
}

export default Character;