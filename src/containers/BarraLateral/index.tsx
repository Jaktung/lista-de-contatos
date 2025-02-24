import { FiltroCard } from "../../components/FiltroCard";
import * as S from "./styles";

const BarraLateral = () => {
    return (
        <S.SideBar>
            <S.Input type="text" placeholder="Procurar" />
            <S.Filters>
                <FiltroCard counter={3} description="Normal" />
                <FiltroCard counter={1} description="Favorito" />
                <FiltroCard ative counter={5} description="Todos" />
            </S.Filters>
        </S.SideBar>
    );
};

export default BarraLateral;
