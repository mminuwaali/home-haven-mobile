import React from "react";
import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import client from "../utilities/request";
import { StatusBar } from 'expo-status-bar';
import { ApolloProvider } from '@apollo/client';
import UserProvider from "../providers/user.provider";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { preventAutoHideAsync } from "expo-splash-screen";

export { ErrorBoundary } from "expo-router";

preventAutoHideAsync();
export default function Layout() {
    const [loaded, error] = useFonts({ ...FontAwesome.font });

    React.useEffect(() => {
        if (error) throw error;
    }, [error]);

    return loaded && <UserProvider>
        <ApolloProvider client={client}>
            <Slot /><StatusBar animated style="auto" />
        </ApolloProvider>
    </UserProvider>;
};
