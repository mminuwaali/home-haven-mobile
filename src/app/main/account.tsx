import React from "react";
import Section from "@/src/components/section";
import { styles } from "@/src/constants/styles";
import { accountLiks } from "@/src/constants/config";
import { profileImage } from "@/src/constants/media";
import { useUserContext } from "@/src/providers/user.provider";
import { Fontisto, FontAwesome5, Entypo } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View, SectionList, SectionListRenderItem, SectionListData } from "react-native";

export default function IndexScreen() {
    const { user } = useUserContext();
    const sections = accountLiks.map(section => ({ data: section.links, title: section.title }));

    const renderItem: SectionListRenderItem<IProfileLink> = ({ item }) => (
        <TouchableOpacity style={{ gap: 10 }} className="flex-row items-center justify-between p-3 my-2 rounded-xl bg-white">
            <item.icon.element {...item.icon.props} size={18} />
            <Text className="flex-1 text-h5 capitalize">{item.title}</Text>
            <Entypo name="chevron-small-right" size={24} />
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }: { section: SectionListData<IProfileLink> }) => (
        <Section title={section.title} titleClassName="capitalize font-bold" />
    );

    return <View style={{ gap: 40 }} className="cover relative px-1/20">
        <Image source={profileImage} className="absolute top-0 left-0 right-0 h-40 object-cover" />

        <View className="w-full flex-row items-center justify-between">
            <Text className="text-h2 capitalize font-bold text-white">my account</Text>
            <Fontisto name="bell" color="white" size={20} />
        </View>

        <View style={[styles.shadow, { gap: 10 }]} className="w-full p-4 rounded-md bg-white flex-row items-center">
            <Image className="bg-black h-14 w-14 rounded-full" />

            <View className="flex-1 items-start">
                <Text className="text-h3 capitalize font-bold">{user?.first_name} {user?.last_name}</Text>
                <Text className="text-h5 text-text">{user?.email}</Text>
            </View>

            <FontAwesome5 name="edit" size={16} color="black" />
        </View>

        <SectionList
            sections={sections}
            renderItem={renderItem}
            stickySectionHeadersEnabled={false}
            renderSectionHeader={renderSectionHeader}
        />
    </View>;
};
