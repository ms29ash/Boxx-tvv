import React from 'react'
import styled from 'styled-components';


const Details = styled.div`
  border-radius: 14px;
  display: none;
  position: absolute;
  align-items: flex-end;
  bottom: 0;
  right: 0%;
  left: 0%;
  top: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.13967090254070376) 40%,
    rgba(0, 0, 0, 0.8) 100%
  );
  div {
    margin-bottom: 2rem;
    margin-left: 10%;
    flex-direction: column;
  }
`;

function Card({ time, name, seasons, category }) {
  return (

    <Details>
      <div>
        <h4>{name}</h4>
        {seasons && <p>{seasons} Seasons</p>}
        {time && <p>{time}</p>}
        <p>{category}</p>
      </div>
    </Details>

  )
}

export default Card