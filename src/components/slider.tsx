import { Image, Text, View } from "react-native";

export default function Slider(props: { welcome: WelcomeType }) {
    return <View style={{ gap: 20}} className="justify-center h-full w-screen overflow-hidden">
        <Image style={{transform: [{ scaleX: 1.2 }] }} source={props.welcome.image} className="w-full flex-1 object-cover rounded-b-full" />

        <Text className="text-blue font-bold text-4xl px-6 mx-auto text-center">{props.welcome.title}</Text>
        <Text className="text-blue text-lg px-6 mx-auto text-center">{props.welcome.description}</Text>
    </View>;
};