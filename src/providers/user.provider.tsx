import React from "react";

const UserContext = React.createContext<IUserContext>({ user: undefined, signin: () => null, signup: () => null, signout: () => null });

export function useUserContext() {
    const context = React.useContext(UserContext);
    if (context === undefined)
        throw new Error("useUserContext must be used within a UserProvider");

    return context;
};

export default function UserProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = React.useState<IUser>();

    const signin = () => { };
    const signup = () => { };
    const signout = () => { };

    return <UserContext.Provider value={{ user, signin, signup, signout }}>{children}</UserContext.Provider>;
}
