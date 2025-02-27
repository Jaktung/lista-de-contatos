import Contact from "../../components/Contact";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const ListaDeContatos = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);

    return (
        <S.Main>
            <S.MainText>
                2 tarefas marcadas como: <span>"todas"</span> e{" "}
                <span>"termo"</span>{" "}
            </S.MainText>
            <S.GridList>
                {items.map((c) => (
                    <li key={c.email}>
                        <Contact {...c} />
                    </li>
                ))}
            </S.GridList>
        </S.Main>
    );
};

export default ListaDeContatos;
