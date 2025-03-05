import Contact from "../../components/Contact";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store";

const ContactList = () => {
    const { items } = useSelector((state: RootReducer) => state.contacts);
    const { term, criterion, value } = useSelector(
        (state: RootReducer) => state.filter
    );

    function contactFilter() {
        let tasksFilter = items;
        if (term != undefined) {
            tasksFilter = tasksFilter.filter(
                (i) => i.name.toLowerCase().search(term.toLowerCase()) >= 0
            );

            if (criterion === "prioridade") {
                tasksFilter = tasksFilter.filter((i) => i.priority === value);
            }
            return tasksFilter;
        } else {
            return items;
        }
    }

    return (
        <S.Main>
            <S.MainText>
                2 tarefas marcadas como: <span>"todas"</span> e{" "}
                <span>"{term}"</span>{" "}
            </S.MainText>
            <ul>
                <li>{term}</li>
                <li>{criterion}</li>
                <li>{value}</li>
            </ul>
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
