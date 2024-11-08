import React from "react";
import { FontAwesome } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard(properties: { product: IProduct }) {
    const toCurrency = (value: number) => value.toLocaleString("en-us", {
        currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2
    });

    const price = properties.product.discount > 0
        ? properties.product.price * (1 - properties.product.discount / 100) :
        properties.product.price;

    return <TouchableOpacity style={{ gap: 20 }} className="w-40 bg-white rounded-xl items-center justify-start p-4 mx-1 flex-none">
        <View className="w-full items-start">
            <Image source={{ uri: properties.product.image.at(0)?.url }} className="w-20 h-20 object-contain mx-auto bg-slate-300 rounded-md" />
            <Text className="text-h6 p-1 px-2 bg-red text-white rounded-tl-xl rounded-br-xl -mt-2">{toCurrency(properties.product.discount)}% off</Text>
        </View>

        <View className="flex-1 w-full">
            <Text className="text-h6 uppercase">{properties.product.name}</Text>
            <Text className="text-h3 font-bold">${toCurrency(price)}</Text>
            <Text className="text-h6 line-through text-gray-400">${toCurrency(properties.product.price)}</Text>

            <View style={{ gap: 10 }} className="flex-row items-center justify-start">
                <FontAwesome name="star" size={18} color="#E3AD33" />
                <Text className="text-h6">{Math.floor(Math.random() * 6).toFixed(1)}({Math.floor(Math.random() * 1000)})</Text>
            </View>
        </View>
    </TouchableOpacity>;
}
