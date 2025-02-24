import styled from "styled-components";
import { Props } from ".";
import vars from "../../styles/vars";

type CardProps = Omit<Props, "counter" | "description">;

export const Card = styled.div<CardProps>`
    background-color: ${(props) => (props.ative ? vars.white : "#fcfcfc")};
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
