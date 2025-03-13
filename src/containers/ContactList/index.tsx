import Contact from "../../components/Contact";
import * as S from "./styles";
import { MainContainer, MainTitle } from "../../styles";
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

    const showFilterResult = (amount: number) => {
        let message = "";

        const complement =
            term !== undefined && term.length > 0 ? `e "${term}"` : "";

        if (criterion === "todas") {
            message = `${amount} contatos encontrados como: todas ${complement}`;
        } else {
            message = `${amount} contatos encontrados como: ${`${criterion}=${value}`} ${complement}`;
        }
        return message;
    };

    const contacts = contactFilter();
    const message = showFilterResult(contacts.length);

    return (
        <MainContainer>
            <MainTitle>{message}</MainTitle>
            <S.MainList>
                <li>{term}</li>
                <li>{criterion}</li>
                <li>{value}</li>
            </S.MainList>
            <S.GridList>
                {contacts.map((c) => (
                    <li key={c.email}>
                        <Contact {...c} />
                    </li>
                ))}
            </S.GridList>
        </MainContainer>
    );
};

export default ContactList;
