import React from "react";
import { Formik } from "formik";
import { router } from "expo-router";
import { signinSchema } from "@/src/constants/schema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useUserContext } from "@/src/providers/user.provider";
import { facebookIcon, googleIcon } from "@/src/constants/media";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SigninScreen() {
    const { signin } = useUserContext();
    const [visible, setVisible] = React.useState(false);

    return <View style={{ gap: 30 }} className="cover py-1/5">
        <View className="w-full">
            <Text className="font-bold text-h1">Welcome Back!</Text>
            <Text className="text-h4">
                Enter your email to start shopping and get awesome deals today!
            </Text>
        </View>

        <Formik
            onSubmit={signin}
            initialValues={{ email: '', password: '' }}
            validationSchema={toFormikValidationSchema(signinSchema)}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={{ gap: 15 }} className="w-full">
                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Ionicons name="mail-outline" size={18} color="gray" />

                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">Email</Text>
                            <TextInput
                                value={values.email}
                                onChangeText={handleChange('email')}
                                placeholder="username@mail.com"
                                className="w-full"
                            />
                        </View>
                    </View>
                    {touched.email && errors.email && <Text className="-mt-3 text-h6 text-red">{errors.email}</Text>}

                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Ionicons name="lock-closed-outline" size={18} color="gray" />

                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">Password</Text>
                            <TextInput
                                value={values.password}
                                onChangeText={handleChange('password')}
                                secureTextEntry={!visible}
                                placeholder="***********"
                                className="w-full"
                            />
                        </View>
                        <MaterialCommunityIcons onPress={() => setVisible(!visible)} name={visible ? 'eye-off-outline' : 'eye-outline'} size={18} color="gray" />
                    </View>
                    {touched.password && errors.password && <Text className="-mt-3 text-h6 text-red">{errors.password}</Text>}

                    <Text onPress={() => router.replace("/auth/forgot-password")} className="text-primary text-h5">Forgot your password?</Text>

                    <TouchableOpacity onPress={() => handleSubmit()} className="w-full">
                        <Text className="text-white bg-primary text-center rounded-md text-h4 p-3">Log in</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>

        <View style={{ gap: 10 }} className="flex-row items-center">
            <View className="h-0.5 bg-slate-400 rounded-l-full flex-1" />
            <Text className="h5 uppercase font-bold">or</Text>
            <View className="h-0.5 bg-slate-400 rounded-r-full flex-1" />
        </View>

        <View style={{ gap: 10 }}>
            <TouchableOpacity style={{ gap: 10 }} className="w-full rounded-md border border-primary p-3 items-center justify-center flex-row">
                <Image source={googleIcon} className="w-4 h-4 object-contain" />
                <Text className="text-h5 text-center text-primary font-bold">Log in with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ gap: 10 }} className="w-full rounded-md border border-primary p-3 items-center justify-center flex-row">
                <Image source={facebookIcon} className="w-4 h-4 object-contain" />
                <Text className="text-h5 text-center text-primary font-bold">Log in with Facebook</Text>
            </TouchableOpacity>
        </View>

        <Text className="text-center text-h4">
            Don't have an account? <Text onPress={() => router.replace("/auth/signup")} className="text-primary">Register</Text>
        </Text>
    </View>;
};