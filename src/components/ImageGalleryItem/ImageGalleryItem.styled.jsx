import styled from "styled-components";

export const Item = styled.li`
width: calc((100% - 54px) / 4);
background-color: black;
height: 220px;
cursor: pointer;

img {
  object-fit: cover;
  transition: transform 300ms linear;

  :hover {
  transform: translateY(-6px) translateX(-6px);
}
}
`;