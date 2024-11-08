import React from "react";
import { router } from "expo-router";
import Slider from "../components/slider";
import { welcome } from "../constants/config";
import Indicate from "../components/indicate";
import { hideAsync } from "expo-splash-screen";
import { Animated, View, Dimensions } from "react-native";
import { useUserContext } from "@/src/providers/user.provider";

setTimeout(hideAsync, 100);
const { width } = Dimensions.get("window");
export default function WelcomeScreen() {
    const ref = React.useRef<any>();
    const { user } = useUserContext();
    const [index, setIndex] = React.useState(0);
    const animated = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        if (user) router.replace("/main");
        // setTimeout(() => router.replace("/main "), 0);
    }, [user]);

    React.useEffect(() => {
        ref.current?.scrollTo({ animated: true, x: index * width });
        Animated.timing(animated, {
            duration: 300,
            useNativeDriver: false,
            toValue: index ? 1 : 0,
        }).start();
    }, [index]);


    const onPrev = () => index > 0 && setIndex(index - 1);
    const onNext = () => index + 1 < welcome.length ? setIndex(index + 1) : router.replace("/auth/signin");

    return <View style={{ gap: 50 }} className="wrapper pb-10">
        <Animated.ScrollView ref={ref} className="flex-1 w-screen" horizontal scrollEnabled={false} showsHorizontalScrollIndicator={false}>
            {welcome.map(item => (<Slider key={item.title} welcome={item} />))}
        </Animated.ScrollView>

        <Indicate index={index} length={welcome.length} />

        <View style={{ gap: 20 }} className="w-full px-1/10 flex-row">
            <Animated.Text onPress={onPrev} style={{ marginLeft: animated.interpolate({ inputRange: [0, 1], outputRange: ['-30%', '0%'] }) }} className="text-h5 text-center capitalize font-bold bg-transparent p-4">
                back
            </Animated.Text>
            <Animated.Text onPress={onNext} className="flex-1 text-h5 text-center capitalize font-bold text-white bg-primary rounded-md py-4">
                next
            </Animated.Text>
        </View>
    </View>;
};