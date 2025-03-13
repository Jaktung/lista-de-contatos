import * as enums from "../../utils/enums/ContactPriority";

import { FormEvent, useState } from "react";
import { MainContainer, Input, MainTitle, LButtonSave } from "../../styles";
import { MainForm, Option, Options } from "./styles";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../store/reducers/contacts";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [number, setNumber] = useState(0);
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(enums.ContactPriority.NORMAL);

    const registerTask = (event: FormEvent) => {
        event.preventDefault();

        dispatch(
            addContact({
                name,
                number,
                email,
                description,
                priority,
            })
        );
        navigate("/");
    };

    return (
        <MainContainer>
            <MainTitle>Novo Contato</MainTitle>
            <MainForm action="" onSubmit={registerTask}>
                <Input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Nome do Contato"
                />
                <Input
                    required
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                    type="number"
                    placeholder="Número de Celular"
                />
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <Input
                    value={description}
                    onChange={({ target }) => setDescription(target.value)}
                    as="textarea"
                    name=""
                    id=""
                    placeholder="Descricao"
                />
                <Options>
                    <p>Prioridade</p>
                    {Object.values(enums.ContactPriority).map((priority) => (
                        <Option key={priority}>
                            <input
                                value={priority}
                                name="priority"
                                type="radio"
                                onChange={(e) =>
                                    setPriority(
                                        e.target.value as enums.ContactPriority
                                    )
                                }
                                id={priority}
                                defaultChecked={
                                    priority === enums.ContactPriority.NORMAL
                                }
                            />
                            <label htmlFor={priority}>{priority}</label>
                        </Option>
                    ))}
                </Options>
                <LButtonSave type="submit">Adicionar</LButtonSave>
            </MainForm>
        </MainContainer>
    );
};

export default Form;
