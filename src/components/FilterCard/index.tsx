import { useDispatch } from "react-redux";
import { changeFilter } from "../../store/reducers/filter";

import * as S from "./styles";
import * as enums from "../../utils/enums/ContactPriority";

export type Props = {
    active?: boolean;
    counter: number;
    priority: string;
    criterion: "prioridade" | "todas";
    value?: enums.ContactPriority;
};

export const FilterCard = ({
    active,
    counter,
    priority,
    criterion,
    value,
}: Props) => {
    const dispatch = useDispatch();

    const filter = () => {
        dispatch(
            changeFilter({
                criterion,
                value,
            })
        );
    };

    return (
        <S.Card $active={active} onClick={filter}>
            <S.Counter>{counter}</S.Counter>
            <S.Description>{priority}</S.Description>
        </S.Card>
    );
};
