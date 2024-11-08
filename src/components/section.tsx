import { View, Text } from "react-native";

export default function Section(props: ISectionProps) {
    return <View style={{ gap: 10 }} className={`items-start w-full ${props.containerClassName}`}>
        <View className={`flex-row justify-between items-center w-full ${props.headerClassName}`}>
            <Text className={`${props.titleClassName}`}>{props.title}</Text>
            {props.alt}
        </View>

        <View className={`w-full ${props.wrapperClassName}`}>
            {props.children}
        </View>
    </View>;
};
