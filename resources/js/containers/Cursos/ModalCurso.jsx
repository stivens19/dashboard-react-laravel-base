import React from "react";
import Modal from './../../components/UI/Modal/Modal';
import { Form, FormBody, FormCloseIcon, FormFooter, FormHeader, FormIconInput, FormInput, FormInputGroup } from './../../components/UI/Forms/styles';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { vars } from '../../config/vars';
import { Button } from './../../components/UI/General/styles';
const ModalCurso = ({handleModal}) => {
    return (
        <Modal>
            <Form>
                <FormHeader>
                    <h3>Editar Curso</h3>
                    <FormCloseIcon onClick={handleModal}>
                        <AiOutlineCloseCircle size={"30px"} />
                    </FormCloseIcon>
                </FormHeader>
                <FormBody>
                    <FormInputGroup>
                        <FormIconInput>
                            <BiUser />
                        </FormIconInput>
                        <FormInput type="text" placeholder="Nombre" />
                    </FormInputGroup>
                </FormBody>
                <FormFooter>
                    <Button>Guardar</Button>
                    <Button bgcolor={vars.dangerColor}>Cancelar</Button>
                </FormFooter>
            </Form>
        </Modal>
    );
};

export default ModalCurso;
