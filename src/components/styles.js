import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #242424;
    background-color: #fefafb
  }
`;

export const Title = styled.h3`
  text-align: center;
  color: purple;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const PatientWrapper = styled.div`
  margin: 10px;

  p {
    text-align: center;

    &.cookie-price {
      color: Blue;
    }
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

export const DeleteButtonStyled = styled.p`
  color: red;
`;

// export const CreateButtonStyled = styled.button`
//   color: lightblue;
//   background-color: black;

//   /* &:hover {
//     color: ${(props) => props.theme.mainColor};
//     background-color: ${(props) => props.theme.backgroundColor};
//   } */
// `;
