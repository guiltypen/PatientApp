import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body {
    color: #242424;
    background-color: #1e1e1e;
  }
`;

export const Title = styled.h3``;
export const ListWrapper = styled.div`
  background-color: #272c34;
  padding: 20px;
  border-radius: 8px;
  margin: 20px;
  padding: 20px;
  width: 200px;
  height: 300px;
  overflow: scroll;
  scrollbar-color: #4285f4 #f5f5f5;
`;
export const UpdateButton = styled.div`
  margin: 10px;
`;
export const DeleteButtonStyled = styled.div`
  margin: 10px;
`;
export const PatientListWrapper = styled.div``;

export const PatientWrapper = styled.div``;

export const SearchBarStyled = styled.input``;

export const DetailWrapper = styled.div`
  margin: 20px;
  position: static;
  background-color: #272c34;
  padding: 30px;
  border-radius: 8px;
  p {
    color: white;
    font-size: 14px;
  }
`;
export const ListDetailWrapper = styled.div`
  display: flex;
`;
export const DetailWrapperName = styled.h2`
  color: white;
`;
export const ButtonWrapper = styled.div`
  justify-content: center;
`;
