import React from 'react'
import styled from "styled-components";

const Head = styled.h3`
  
    margin: 0% 1rem 1rem;
    text-transform: capitalize;
    @media screen and (max-width: 768px) and (min-width: 500px){
     font-size: 1.25rem;

    }
    @media screen and (max-width: 500px) and (min-width: 0){
     font-size: 1rem;

    }
  `

function Heading({ children }) {
    return (
        <Head>
            {children}

        </Head>
    )
}

export default Heading
