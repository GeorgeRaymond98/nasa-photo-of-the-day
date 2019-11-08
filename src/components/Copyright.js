import React from "react";
import styled from 'styled-components';



export const Sentence = styled.p `

font-size: 1.5rem;
font-weight: bold;
 
`;


function Copyright({copy}) {
    return (
        <>
        <Sentence>
        Copyright: {copy}
        </Sentence>
        </>
    )
}

export default Copyright