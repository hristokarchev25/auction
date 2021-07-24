import React, { useEffect } from "react";
import { auth } from "../components/_actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

function AuthHoc(ComposedClass, reload) {
    function AuthenticationCheck(props) {
        const dispatch = useDispatch();
        let user = useSelector((state) => state.user);

        useEffect(() => {

            dispatch(auth())
                .then((response) => {

                    if (!response.payload.isAuth) {
                        if (reload) {
                            props.history.push("/login");
                        }
                    } else {
                        if (reload === false) {
                            props.history.push("/");
                        }
                    }
                })
                .catch((error) => console.error("Error:", error));
        }, [dispatch, props.history]);

        return <ComposedClass {...props} user={user} />;
    }
    return AuthenticationCheck;
}

export default AuthHoc;