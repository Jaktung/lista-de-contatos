import styled from "styled-components";
import vars from "../../styles/vars";

export const SideBar = styled.aside`
    background-color: ${vars.sideBG};
    height: 100vh;
    padding: 16px;
`;

export const Input = styled.input`
    font-size: 16px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-weight: bold;
    color: ${vars.txtColor};
`;

export const Filters = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;
