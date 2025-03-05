import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../store/reducers/filter";

import * as S from "./styles";
import * as enums from "../../utils/enums/ContactPriority";
import { RootReducer } from "../../store";

export type Props = {
    priority: string;
    criterion: "prioridade" | "todas";
    value?: enums.ContactPriority;
};

export const FilterCard = ({ priority, criterion, value }: Props) => {
    const dispatch = useDispatch();
    const { filter, contacts } = useSelector((state: RootReducer) => state);

    const verifyIsActive = () => {
        const sameCriterion = filter.criterion === criterion;
        const sameValue = filter.value === value;

        return sameCriterion && sameValue;
    };

    const countTasks = () => {
        if (criterion === "todas") return contacts.items.length;
        if (criterion === "prioridade") {
            return contacts.items.filter((i) => i.priority === value).length;
        }
    };

    const filt = () => {
        dispatch(
            changeFilter({
                criterion,
                value,
            })
        );
    };

    const counter = countTasks();
    const active = verifyIsActive();

    return (
        <S.Card $active={active} onClick={filt}>
            <S.Counter>{counter}</S.Counter>
            <S.Description>{priority}</S.Description>
        </S.Card>
    );
};
