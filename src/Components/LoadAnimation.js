
import styled, { keyframes } from "styled-components";

const Load = keyframes` 
  0%{background-position:9% 0%}
  50%{background-position:92% 100%}
  100%{background-position:9% 0%}
  `;
const LoadingAnimation = styled.div`
  background: linear-gradient(60deg, #303030 30%, #000 75%);
  background-size: 400% 400%;
  height: auto;
  aspect-ratio: 16 / 8;
  width: 100%;

  animation: ${Load} 30s ease infinite;
`;

export default LoadingAnimation