import Contact from "../../components/Contact";
import * as S from "./styles";

const contacts = [
    {
        name: "João",
        priority: "Normal",
        number: 123456789,
        email: "joao@gmail.com",
    },
    {
        name: "Maria",
        priority: "Favorito",
        number: 988765432,
        email: "maria@gmail.com",
    },
    {
        name: "José",
        priority: "Normal",
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
            <ul>
                {contacts.map((c) => (
                    <li key={c.email}>
                        <Contact {...c} />
                    </li>
                ))}
            </ul>
        </S.Main>
    );
};

export default ListaDeContatos;
