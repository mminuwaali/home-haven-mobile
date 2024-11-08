import React from "react";
import { styles } from "@/src/constants/styles";
import Indicate from "@/src/components/indicate";
import { carousels, products } from "@/src/constants/config";
import { Picker } from '@react-native-picker/picker';
import { Fontisto, Feather } from '@expo/vector-icons';
import Carousel from "react-native-reanimated-carousel";
import { TextInput, View, Dimensions, Text, Image, FlatList } from "react-native";
import ProductCard from "@/src/components/cards/product";

const dimension = Dimensions.get("window");
export default function IndexScreen() {
    const [index, setIndex] = React.useState(0);
    const [selectedAddress, setSelectedAddress] = React.useState("");

    return <View style={{ gap: 20 }} className="cover px-1/20">
        <View style={{ gap: 10 }} className="w-full">
            <View style={{ gap: 10 }} className="items-center flex-row w-full">
                <View style={[styles.shadow, { gap: 10, }]} className="flex-1 flex-row px-3 py-1.5 items-center bg-white rounded-full">
                    <Fontisto name="search" size={18} />
                    <TextInput className="flex-1" placeholder="Search candles" />
                    <Feather name="camera" size={18} />
                </View>

                <Fontisto name="bell" size={20} />
            </View>

            <View style={{ gap: 10 }} className="w-full flex-row items-center ">
                <Fontisto name="map-marker-alt" size={14} />
                <View className="flex-1">
                    <Picker selectedValue={selectedAddress} onValueChange={itemValue => setSelectedAddress(itemValue)} className="flex-1 text-h6">
                        <Picker.Item label="789 Oak Road, Chicago, IL 60601" value="addr1" />
                        <Picker.Item label="321 Pine Street, Miami, FL 33101" value="addr2" />
                        <Picker.Item label="654 Maple Drive, Seattle, WA 98101" value="addr3" />
                        <Picker.Item label="123 Main Street, New York, NY 10001" value="addr4" />
                        <Picker.Item label="456 Park Avenue, Los Angeles, CA 90012" value="addr5" />
                    </Picker>                </View>
            </View>
        </View>

        <View style={{ height: 200 }} className="w-full">
            <Carousel
                loop
                autoPlay
                height={200}
                data={carousels}
                scrollAnimationDuration={2000}
                width={(dimension.width / 20) * 18}
                onSnapToItem={index => setIndex(index)}
                renderItem={({ item }) => (
                    <View className="w-full h-full relative">
                        <Image className="w-full h-full object-contain bg-primary" source={{ uri: item.image }} />
                    </View>
                )}
            />
        </View>

        <Indicate index={index} length={carousels.length} />

        <View className="w-full flex-row items-center justify-between">
            <Text className="text-h3 capitalize font-bold">spcial offers</Text>
            <Text className="capitalize text-primary underline font-bold">see more</Text>
        </View>

        <FlatList
            horizontal
            data={products}
            className="p-1"
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (<ProductCard product={item} />)}
        />
    </View>;
};
