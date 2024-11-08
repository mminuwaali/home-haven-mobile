import React from "react";

const userData: IUser = {
    id: 1,
    profile: null,
    last_name: "M inuwa",
    first_name: "Muhammad",
    username: "mminuwaali",
    phone_number: "08060230285",
    email: "mminuwaali@gmail.com",
    last_login: new Date().toString(),
};

const UserContext = React.createContext<IUserContext>({ user: undefined, signin: () => null, signup: () => null, signout: () => null });

export function useUserContext() {
    const context = React.useContext(UserContext);
    if (context === undefined)
        throw new Error("useUserContext must be used within a UserProvider");

    return context;
};

export default function UserProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = React.useState<IUser>();

    const signin = (data: Partial<IUser>) => { setUser(userData) };
    const signup = (data: Partial<IUser>) => { };
    const signout = () => { setUser(undefined) };

    return <UserContext.Provider value={{ user, signin, signup, signout }}>{children}</UserContext.Provider>;
}
