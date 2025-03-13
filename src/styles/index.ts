import { createGlobalStyle, styled } from "styled-components";
import vars from "./vars";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
        text-decoration: none;
    }

    body{
        overflow: hidden;
    }
`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
`;

export const MainContainer = styled.main`
    padding: 40px;
    height: 100vh;
    overflow-y: scroll;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-weight: bold;
    width: 100%;
    color: ${vars.txtColor};
`;

export const MainTitle = styled.h2`
    color: ${vars.black};
    font-weight: bold;
    margin-bottom: 40px;
`;

export const DefaultButton = styled.button`
    background-color: ${vars.btnDefault};
    padding: 6px 12px;
    color: ${vars.white};
    border: none;
    border-radius: 8px;
    margin-right: 8px;
    font-size: 12px;
    cursor: pointer;
`;

export const LButtonSave = styled.button`
    background-color: ${vars.green};
    padding: 6px 12px;
    color: ${vars.white};
    border: none;
    border-radius: 8px;
    margin-right: 8px;
    font-size: 12px;
    cursor: pointer;
`;

export default EstiloGlobal;
