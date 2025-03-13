import { Link } from "react-router-dom";

import styled from "styled-components";
import vars from "../../styles/vars";

export const PlusButton = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${vars.green};
    width: 64px;
    height: 64px;
    color: ${vars.white};
    padding: 8px 20px;
    font-size: 40px;
    position: fixed;
    bottom: 40px;
    right: 40px;
    border-radius: 50%;
`;
