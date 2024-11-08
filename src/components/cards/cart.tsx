import React from "react";
import { styles } from "@/src/constants/styles";
import { AntDesign, Entypo } from '@expo/vector-icons';
import { Image, View, Text, TouchableOpacity } from "react-native";

export default function CartCard(properties: { cart: ICartItem }) {
    const [amount, setAmount] = React.useState(properties.cart.product.quantity);

    const plus = () => {
        if (amount < properties.cart.product.product.quantity)
            setAmount(amount + 1);
    };
    const minus = () => {
        if (amount > 0) setAmount(amount - 1);
    };
    const toCurrency = (value: number) => value.toLocaleString("en-us", {
        currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2
    });

    const price = properties.cart.product.product.discount > 0
        ? properties.cart.product.product.price * (1 - properties.cart.product.product.discount / 100) * amount
        : properties.cart.product.product.price * amount;

    return <View style={[styles.shadow, { gap: 10 }]} className="my-2 w-full p-4 rounded-2xl flex-row bg-white">
        <TouchableOpacity>
            <Image source={{ uri: properties.cart.product.product.image.at(0)?.url || "" }} className="w-16 h-20 my-auto object-contain bg-black" />
        </TouchableOpacity>

        <View className="flex-1">
            <Text className="text-h5 uppercase">{properties.cart.product.product.name}</Text>
            <Text className="text-h4 font-bold">${toCurrency(price)}</Text>

            <View style={{ gap: 10, display: properties.cart.product.product.discount ? 'flex' : 'none' }} className="flex-row items-center justify-start my-2">
                <Text className="text-h6 line-through text-gray-400">${toCurrency(properties.cart.product.product.price)}</Text>
                <Text className="text-h6 p-1 px-2 bg-red text-white rounded-tl-xl rounded-br-xl">{toCurrency(properties.cart.product.product.discount)}% off</Text>
            </View>

            <Text className="text-h6 capitalize text-gray-400">{properties.cart.product.product.category}</Text>

            <View className="w-full flex-row items-center justify-between">
                <AntDesign name="hearto" size={16} />
                <View style={{ gap: 20 }} className="mt-auto p-1.5 border border-gray-200 rounded-lg flex-row">
                    <Entypo color="gray" name="minus" size={16} onPress={minus} />
                    <Text className="text-gray-300 font-bold text-h5">{amount}</Text>
                    <Entypo color="gray" name="plus" size={16} onPress={plus} />
                </View>
            </View>
        </View>

    </View>;
}