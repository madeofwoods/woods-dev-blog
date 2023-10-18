import styled from "styled-components";

export const Ball = styled.div`
  width: 400px;
  height: 400px;
  /* background-color: hotpink; */
  position: fixed;
  transform: translate(-50%, -50%);
  left: 51%;
  top: 72%;
  border-radius: 50%;
  background: linear-gradient(55deg, hotpink, 35%, rgb(17, 17, 255), aquamarine);
  animation: rotate 15s linear infinite;
  /* filter: blur(100px); */
  z-index: 1;
`;
