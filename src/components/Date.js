import React from "react";
import styled from 'styled-components';


const Paragrahs = styled.p `
    font-size: 1.5rem;
    background-color: purple;
`;

function Date({date}) {
    return (
        <>
        <Paragrahs>
        Date: {date}
        </Paragrahs>
        </>
    )
}

export default Date