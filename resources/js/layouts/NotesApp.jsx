import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { startChecking } from "../actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/UI/Spinner";
import Sidebar from "../components/UI/Sidebar/Sidebar";
import Navbar from "../components/UI/NavBar/Navbar";


const NotesApp = () => {
    const dispatch = useDispatch();
    const { checking } = useSelector((state) => state.auth);
    useEffect(() => {
        dispatch(startChecking());
    }, [dispatch]);
    if (checking) {
        return <Spinner />
    } else {
        return (
            <>
                <Navbar />
                <Sidebar />
                <Outlet />
            </>
        )
    }
};

export default NotesApp;
