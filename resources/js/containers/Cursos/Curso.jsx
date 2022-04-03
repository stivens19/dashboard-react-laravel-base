import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CardTable, CardTableFooter, CardTableHeader, CardTableOptions, Table,TablePaginatior,Tbody,Td,Th,Thead, Tr } from '../../components/UI/Table/styles';
import { Main, TitleSection } from './../styles';
import { Button, ButtonFloat, ButtonLink, Input, Option, Select } from './../../components/UI/General/styles';
import { toggleModal } from './../../actions/ui';
import ModalCurso from './ModalCurso';
import { BsPlusLg,BsFillPencilFill,BsTrash } from "react-icons/bs";
import { vars } from './../../config/vars';
const Curso = () => {
  const { isOpen,isOpenModal } = useSelector((state) => state.ui);
  const dispatch=useDispatch();
  const handleModal=()=>{
    dispatch(toggleModal());
  }
  return (
    <Main open={isOpen}>
      <TitleSection>Gestion de Cursos</TitleSection>
      <CardTable>
        <CardTableHeader>Lista de cursos</CardTableHeader>
        <CardTableOptions>
          <Select>
            <Option value="10">10</Option>
            <Option value="20">20</Option>
          </Select>

          <div className="mt-1">
            <Select>
              <Option value="nombre">Nombre</Option>
            </Select>
            <Input type="text" className='ml-1' placeholder="Buscar..." />
          </div>
        </CardTableOptions>
        <Table>
          <Thead>
            <Tr>
              <Th>Nombre</Th>
              <Th>Descripcion</Th>
              <Th>Duracion</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Curso 1</Td>
              <Td>Curso de React</Td>
              <Td>3 meses</Td>
              <Td>
                <Button onClick={handleModal} className="mr-1"><BsFillPencilFill/></Button>
                <Button bgcolor={vars.dangerColor}><BsTrash/></Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <CardTableFooter>
          <div>Mostrando del 1 al 10 de 50 entradas</div>
          <TablePaginatior>
            <ButtonLink>Anterior</ButtonLink>
            <Button>1</Button>
            <ButtonLink>Siguiente</ButtonLink>

          </TablePaginatior>
        </CardTableFooter>
      </CardTable>
      {
        isOpenModal && 
        <ModalCurso handleModal={handleModal} />
      }
      <ButtonFloat>
        <BsPlusLg />
      </ButtonFloat>
    </Main>
  )
}

export default Curso