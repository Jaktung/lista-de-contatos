import styled from "styled-components";
import vars from "../../styles/vars";

export const Main = styled.main`
    padding: 40px;
    height: 100vh;
    overflow-y: scroll;
`;

export const MainText = styled.p`
    font-size: 16px;
    color: ${vars.black};
    font-weight: bold;
    margin-bottom: 40px;
`;

export const MainList = styled.ul`
    padding-bottom: 40px;
    font-weight: bold;
`;

export const GridList = styled.ul`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
`;
