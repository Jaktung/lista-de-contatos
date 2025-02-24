import Contact from "../../components/Contact";
import * as S from "./styles";
import * as enums from "../../utils/enums/ContactPriority";

const contacts = [
    {
        name: "João",
        priority: enums.ContactPriority.NORMAL,
        number: 123456789,
        email: "joao@gmail.com",
    },
    {
        name: "Maria",
        priority: enums.ContactPriority.FAVORITE,
        number: 988765432,
        email: "maria@gmail.com",
    },
    {
        name: "José",
        priority: enums.ContactPriority.NORMAL,
        number: 842957264,
        email: "jose@gmai.com",
    },
];

const ListaDeContatos = () => {
    return (
        <S.Main>
            <S.MainText>
                2 tarefas marcadas como: <span>"todas"</span> e{" "}
                <span>"termo"</span>{" "}
            </S.MainText>
            <S.GridList>
                {contacts.map((c) => (
                    <li key={c.email}>
                        <Contact {...c} />
                    </li>
                ))}
            </S.GridList>
        </S.Main>
    );
};

export default ListaDeContatos;
