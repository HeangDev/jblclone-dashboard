import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    let auth = {'token':false}
    return (
        auth.token ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoute