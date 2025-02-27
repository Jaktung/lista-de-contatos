import { FiltroCard } from "../../components/FiltroCard";
import * as S from "./styles";

const BarraLateral = () => {
    return (
        <S.SideBar>
            <S.Input type="text" placeholder="Procurar" />
            <S.Filters>
                <FiltroCard counter={3} priority="Normal" />
                <FiltroCard counter={1} priority="Favorito" />
                <FiltroCard ative="true" counter={5} priority="Todos" />
            </S.Filters>
        </S.SideBar>
    );
};

export default BarraLateral;
