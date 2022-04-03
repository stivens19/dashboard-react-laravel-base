import React from "react";
import {Avatar,Logo,MenuNav,NavItem,NavLinkItem,ToggleButton,UserDetail,UserName,} from "./styles";
import { MdMenu } from "react-icons/md";
import { Icon, TextItem } from "./../Sidebar/styles";
import { FaUserCog, FaRegFilePdf } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from './../../../actions/ui';

const Navbar = () => {
    const dispatch = useDispatch();
    const handleToggle=()=>{
        dispatch(toggleMenu());
    }
    return (
        <MenuNav>
            <NavItem>
                <Logo>{"<ST />"}</Logo>
                <ToggleButton onClick={handleToggle}>
                    <MdMenu size={"35px"} />
                </ToggleButton>
            </NavItem>
            <NavItem>
                <NavLinkItem>
                    <Icon>
                        <FaUserCog />
                    </Icon>
                    <TextItem>Perfil</TextItem>
                </NavLinkItem>

                <NavLinkItem>
                    <Icon>
                        <FaRegFilePdf />
                    </Icon>
                    <TextItem>Guia de usuario</TextItem>
                </NavLinkItem>
            </NavItem>
            <NavItem>
                <Avatar src="https://avatars.githubusercontent.com/u/53526974?v=4" />
                <UserDetail>
                    <UserName>Stivens Espinoza</UserName>
                    <p>Administrador</p>
                </UserDetail>
            </NavItem>
        </MenuNav>
    );
};

export default Navbar;
