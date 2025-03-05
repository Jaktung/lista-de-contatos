import styled from "styled-components";
import vars from "../../styles/vars";
import * as enums from "../../utils/enums/ContactPriority";

type TagProps = {
    $priority?: string;
};

function returnPriorityColor({ $priority }: TagProps): string {
    if ("priority" in { $priority }) {
        if ($priority === enums.ContactPriority.FAVORITE) return vars.yellow;
    }
    return "#ccc";
}

export const ContactCard = styled.div`
    background-color: ${vars.bgColor2};
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 32px;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 16px;
    align-items: center;
`;

export const ContactInfos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    border-bottom: 1px solid #0000001a;
`;

export const ContactName = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: ${vars.black};
`;

export const ContactPriority = styled.span<TagProps>`
    font-size: 10px;
    background-color: ${(props) => returnPriorityColor(props)};
    width: 66px;
    border-radius: 8px;
    padding: 4px;
    text-align: center;
`;

export const ContactEmail = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: #8b8b8b;
`;

export const ContactNumber = styled.span`
    font-weight: bold;
`;

export const ContactDescription = styled.textarea`
    resize: none;
    border: none;
    padding: 8px;
    color: ${vars.txtColor};
`;

export const Buttons = styled.div`
    margin-top: 16px;
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

export const LButtonEdit = styled.button`
    background-color: ${vars.btnDefault};
    padding: 6px 12px;
    color: ${vars.white};
    border: none;
    border-radius: 8px;
    margin-right: 8px;
    font-size: 12px;
    cursor: pointer;
`;

export const RButton = styled.button`
    background-color: ${vars.red};
    padding: 6px 12px;
    color: ${vars.white};
    border: none;
    border-radius: 8px;
    font-size: 12px;
    cursor: pointer;
`;
