import { useState } from "react";
import * as S from "./styles";

type Props = {
    name: string;
    priority: string;
    email: string;
    number: number;
};

const Contact = ({ name, priority, email, number }: Props) => {
    const [isEditting, setIsEditting] = useState(false);

    return (
        <S.ContactCard>
            <S.ContactInfos>
                <S.ContactName>{name}</S.ContactName>
                <S.ContactPriority priority={priority}>
                    {priority}
                </S.ContactPriority>
                <S.ContactEmail>{email}</S.ContactEmail>
                <S.ContactNumber>{number}</S.ContactNumber>
            </S.ContactInfos>
            <S.Buttons>
                {isEditting ? (
                    <>
                        <S.LButtonSave>Salvar</S.LButtonSave>
                        <S.RButton onClick={() => setIsEditting(false)}>
                            Cancelar
                        </S.RButton>
                    </>
                ) : (
                    <>
                        <S.LButtonEdit onClick={() => setIsEditting(true)}>
                            Editar
                        </S.LButtonEdit>
                        <S.RButton>Remover</S.RButton>
                    </>
                )}
            </S.Buttons>
        </S.ContactCard>
    );
};

export default Contact;
