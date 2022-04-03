import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { Provider} from "react-redux";
import { store } from "./../store/store";
import tokenAuth from "./../config/token";
import NotesApp from "../layouts/NotesApp";
import PrivateRoute from "./PrivateRoute";
import DashboardRoutes from "./DashboardRoutes";
import PublicRoutes from "./PublicRoutes";
import { LoginRoutes } from './LoginRoutes';

// Revisar si tenemos un token
const token = localStorage.getItem("token");
if (token) {
    tokenAuth(token);
}
const AppRouter = () => {
    
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login/*" element={<AuthLayout />}>
                        <Route path="*" element={
                            <PublicRoutes>
                                <LoginRoutes />
                            </PublicRoutes>} 
                        />
                    </Route>
                    <Route path="/admin/*" element={<NotesApp />}>
                        <Route path="*" element={
                            <PrivateRoute>
                                <DashboardRoutes />
                            </PrivateRoute>} 
                        />
                    </Route> 
                    {/*<Route path="/admin/*" element={
                        <PrivateRoute>
                            <Route index element={<Home />} />
                        </PrivateRoute>
                    }  
                />*/}
                       
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default AppRouter;
