import styled from "styled-components";
import vars from "../../styles/vars";

export const MainForm = styled.form`
    max-width: 547px;
    width: 100%;
    font-weight: bold;
    font-size: 14px;
    color: ${vars.page2txt};

    textarea {
        resize: none;
        margin-bottom: 16px;
    }
`;

export const Options = styled.div`
    margin-bottom: 16px;

    p {
        margin-bottom: 6px;
    }

    label,
    input {
        margin-right: 6px;
    }
`;

export const Option = styled.div`
    display: inline;
    text-transform: capitalize;
`;
