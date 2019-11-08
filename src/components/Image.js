import React from "react";
import styled from 'styled-components';


const Images = styled.img `
   width: 50%;
   border-radius: 30px;


`;

const Container = styled.div `
    margin-top: 2%;
    border-radius: 30px;
    background-color: red;
`;

function Image({url}) {
    return (
        <>
        <Container>
            <Images src ={url} alt="text"/>
        </Container>
        </>
    )
}

export default Image