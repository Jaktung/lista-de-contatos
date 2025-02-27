import styled from "styled-components";
import { Props } from ".";
import vars from "../../styles/vars";

type CardProps = Omit<Props, "counter" | "priority">;

export const Card = styled.div<CardProps>`
    background-color: ${(props) => (props.ative ? vars.white : vars.bgColor2)};
    border: 1px solid ${(props) => (props.ative ? vars.blue : "#A1A1A1")};
    border-radius: 8px;
    padding: 8px;
    color: ${(props) => (props.ative ? vars.blue : vars.txtColor)};
    cursor: pointer;
`;

export const Counter = styled.span`
    font-size: 24px;
    font-weight: bold;
    display: block;
`;

export const Description = styled.span`
    display: block;
    font-size: 16px;
`;
