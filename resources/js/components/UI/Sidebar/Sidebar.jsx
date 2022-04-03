import React from "react";
import {
    Menu,
    MenuSubtitle,
    MenuList,
    Icon,
    TextItem,
    MenuListItem,
} from "./styles";
import {
    AiOutlineDashboard,
    AiOutlineCheckSquare,
    AiOutlineClockCircle,
    AiOutlineCloudUpload,
    AiOutlineUsergroupAdd,
    AiOutlineEdit,
    AiOutlineCalendar,
    AiFillContainer,
} from "react-icons/ai";
import { VscNotebook } from "react-icons/vsc";
import { BsCalendar2Week } from "react-icons/bs";
import { useSelector } from "react-redux";


const Sidebar = () => {
    const { isOpen } = useSelector((state) => state.ui);
    return (
        <Menu open={isOpen}>
            <MenuSubtitle>Dashboard</MenuSubtitle>
            <MenuList>
                <MenuListItem to="/admin">
                    <Icon>
                        <AiOutlineDashboard />
                    </Icon>
                    <TextItem>Dashboard</TextItem>
                </MenuListItem>
            </MenuList>

            <MenuSubtitle>Zona alumnos</MenuSubtitle>
            <MenuList>
                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineCheckSquare />
                    </Icon>
                    <TextItem>Revisar notas</TextItem>
                </MenuListItem>

                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineClockCircle />
                    </Icon>
                    <TextItem>Revisar horarios</TextItem>
                </MenuListItem>
            </MenuList>

            <MenuSubtitle>Zona Docente</MenuSubtitle>
            <MenuList>
                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineCloudUpload />
                    </Icon>
                    <TextItem>cargar notas</TextItem>
                </MenuListItem>
            </MenuList>

            <MenuSubtitle>Zona Administrativa</MenuSubtitle>
            <MenuList>
                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineUsergroupAdd />
                    </Icon>
                    <TextItem>Gestion de usuarios</TextItem>
                </MenuListItem>

                <MenuListItem to="/admin/cursos">
                    <Icon>
                        <VscNotebook />
                    </Icon>
                    <TextItem>Gestion de cursos</TextItem>
                </MenuListItem>

                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineCalendar />
                    </Icon>
                    <TextItem>Gestion de Periodos</TextItem>
                </MenuListItem>

                <MenuListItem to="#">
                    <Icon>
                        <AiFillContainer />
                    </Icon>
                    <TextItem>Gestion de bimestres</TextItem>
                </MenuListItem>

                <MenuListItem to="#">
                    <Icon>
                        <BsCalendar2Week />
                    </Icon>
                    <TextItem>Gestion de Horarios</TextItem>
                </MenuListItem>

                <MenuListItem to="#">
                    <Icon>
                        <AiOutlineEdit />
                    </Icon>
                    <TextItem>Matricular Alumnos</TextItem>
                </MenuListItem>
            </MenuList>
        </Menu>
    );
};

export default Sidebar;
