import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";

import { remove, edit } from "../../store/reducers/contacts";
import ContactClass from "../../models/Contact";

type Props = ContactClass;

const Contact = ({
    name,
    priority,
    email,
    number,
    id,
    description: originalDescription,
}: Props) => {
    const dispatch = useDispatch();
    const [isEditting, setIsEditting] = useState(false);
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (originalDescription.length > 0) {
            setDescription(originalDescription);
        }
    }, [originalDescription]);

    function cancelEdit() {
        setIsEditting(false);
        setDescription(originalDescription);
    }

    return (
        <S.ContactCard>
            <S.ContactContainer>
                <S.ContactInfos>
                    <S.ContactName>{name}</S.ContactName>
                    <S.ContactPriority priority={priority}>
                        {priority}
                    </S.ContactPriority>
                    <S.ContactEmail>{email}</S.ContactEmail>
                    <S.ContactNumber>{number}</S.ContactNumber>
                    <S.ContactDescription
                        disabled={!isEditting}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </S.ContactInfos>
                <S.Buttons>
                    {isEditting ? (
                        <>
                            <S.LButtonSave
                                onClick={() => {
                                    dispatch(
                                        edit({
                                            description,
                                            name,
                                            number,
                                            email,
                                            id,
                                            priority,
                                        })
                                    );
                                    setIsEditting(false);
                                }}
                            >
                                Salvar
                            </S.LButtonSave>
                            <S.RButton onClick={cancelEdit}>Cancelar</S.RButton>
                        </>
                    ) : (
                        <>
                            <S.LButtonEdit onClick={() => setIsEditting(true)}>
                                Editar
                            </S.LButtonEdit>
                            <S.RButton onClick={() => dispatch(remove(id))}>
                                Remover
                            </S.RButton>
                        </>
                    )}
                </S.Buttons>
            </S.ContactContainer>
        </S.ContactCard>
    );
};

export default Contact;
