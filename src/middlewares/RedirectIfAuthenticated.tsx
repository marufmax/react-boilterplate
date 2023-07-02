import {useAuth} from "providers";
import {PropsWithChildren} from "react";
import {Navigate} from "react-router";

export function RedirectIfAuthenticated({children}: PropsWithChildren) {
    const auth = useAuth();

    if(auth.isAuthenticated) {
        return <Navigate to={"/"}/>;
    }

    return children;
}
