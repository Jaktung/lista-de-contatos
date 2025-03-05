import Contact from "../../components/Contact";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const ContactList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);
    const { term = "" } = useSelector((state: RootReducer) => state.filter);

    function contactFilter() {
        return items.filter(
            (i) => i.name.toLowerCase().search(term.toLowerCase()) >= 0
        );
    }

    return (
        <S.Main>
            <S.MainText>
                2 tarefas marcadas como: <span>"todas"</span> e{" "}
                <span>"{term}"</span>{" "}
            </S.MainText>
            <S.GridList>
                {contactFilter().map((c) => (
                    <li key={c.email}>
                        <Contact {...c} />
                    </li>
                ))}
            </S.GridList>
        </S.Main>
    );
};

export default ContactList;
