import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { Text, View, FlatList } from "react-native";
import CartCard from "@/src/components/cards/cart";
import { carts } from "@/src/constants/config";

export default function IndexScreen() {
    return <View style={{ gap: 10 }} className="cover relative px-1/20 bg-slate-100 pb-[90px]">
        <View className="w-full flex-row items-center justify-between">
            <Text className="text-h2 capitalize font-bold">my cart</Text>
            <Fontisto name="bell" size={20} />
        </View>

        <FlatList
            data={carts}
            className="w-full flex-1"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 10 }}
            renderItem={({ item }) => <CartCard cart={item} />}
        />
    </View>;
}
