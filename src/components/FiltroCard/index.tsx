import * as S from "./styles";

export type Props = {
    ative?: boolean;
    counter: number;
    description: string;
};

export const FiltroCard = ({ ative, counter, description }: Props) => {
    return (
        <S.Card ative={ative}>
            <S.Counter>{counter}</S.Counter>
            <S.Description>{description}</S.Description>
        </S.Card>
    );
};
