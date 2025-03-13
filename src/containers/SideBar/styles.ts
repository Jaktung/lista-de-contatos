import styled from "styled-components";
import vars from "../../styles/vars";

export const SideBar = styled.aside`
    background-color: ${vars.sideBG};
    height: 100vh;
    padding: 16px;
`;

export const Filters = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
`;
