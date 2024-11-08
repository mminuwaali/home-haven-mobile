import React from "react";
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import { Feather, Octicons } from "@expo/vector-icons";

export default function MainLayout() {
    return (
        <Tabs initialRouteName="index" screenOptions={{ headerShown: false, ...styles, tabBarActiveTintColor: "#156651" }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                        <Octicons size={20} name="home" color={focused ? "#156651" : "#888"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="cart"
                options={{
                    title: "My Cart",
                    tabBarIcon: ({ focused }) => (
                        <Feather size={20} name="shopping-cart" color={focused ? "#156651" : "#888"} />
                    ),
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                    title: "My Account",
                    tabBarIcon: ({ focused }) => (
                        <Feather size={20} name="user" color={focused ? "#156651" : "#888"} />
                    ),
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    tabBarStyle: {
        left: 0,
        right: 0,
        bottom: 0,
        height: 90,
        padding: 10,
        borderTopWidth: 1,
        position: "absolute",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        justifyContent: "center",
        borderTopColor: "#e0e0e0",
        backgroundColor: "#f8f9fa",
    },
    tabBarItemStyle: {
        height: 40,
    },
    tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: "600",
    },
});
