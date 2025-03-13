import { useDispatch, useSelector } from "react-redux";
import { FilterCard } from "../../components/FilterCard";
import { RootReducer } from "../../store";
import { changeTerm } from "../../store/reducers/filter";

import * as S from "./styles";
import * as enums from "../../utils/enums/ContactPriority";
import { Input, DefaultButton } from "../../styles";
import { useNavigate } from "react-router-dom";

type Props = {
    showFilters: boolean;
};

const SideBar = ({ showFilters }: Props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { term } = useSelector((state: RootReducer) => state.filter);

    return (
        <S.SideBar>
            {showFilters ? (
                <>
                    <Input
                        type="text"
                        placeholder="Procurar"
                        value={term}
                        onChange={(e) => dispatch(changeTerm(e.target.value))}
                    />
                    <S.Filters>
                        <FilterCard
                            criterion="prioridade"
                            value={enums.ContactPriority.NORMAL}
                            priority="Normal"
                        />
                        <FilterCard
                            criterion="prioridade"
                            value={enums.ContactPriority.FAVORITE}
                            priority="Favorito"
                        />
                        <FilterCard criterion="todas" priority="Todos" />
                    </S.Filters>
                </>
            ) : (
                <DefaultButton onClick={() => navigate("/")}>
                    Voltar a página inicial
                </DefaultButton>
            )}
        </S.SideBar>
    );
};

export default SideBar;
