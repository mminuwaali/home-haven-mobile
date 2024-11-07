import React from "react";
import { router, Slot } from "expo-router";
import { useUserContext } from "@/src/providers/user.provider";

export default function IndexScreen() {
    const { user } = useUserContext();

    React.useEffect(() => {
        if (user) router.replace("/main");
    }, [user]);

    return <Slot />;
};
