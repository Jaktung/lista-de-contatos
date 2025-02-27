import * as S from "./styles";

export type Props = {
    ative?: boolean | string;
    counter: number;
    priority: string;
};

export const FiltroCard = ({ ative, counter, priority }: Props) => {
    return (
        <S.Card ative={ative}>
            <S.Counter>{counter}</S.Counter>
            <S.Description>{priority}</S.Description>
        </S.Card>
    );
};
