import React from "react";
import { Formik } from "formik";
import { router } from "expo-router";
import { signupSchema } from "@/src/constants/schema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { facebookIcon, googleIcon } from "@/src/constants/media";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


export default function SignupScreen() {
    const [visible, setVisible] = React.useState(false);

    return <View style={{ gap: 30 }} className="cover py-1/5">
        <View className="w-full">
            <Text className="font-bold text-h1">Create Account</Text>
            <Text className="text-h4">
                Fill in your details below to get started on a seamless shopping experience.
            </Text>
        </View>

        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
            onSubmit={(values) => { console.log(values); }}
            validationSchema={toFormikValidationSchema(signupSchema)}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={{ gap: 15 }} className="w-full">
                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Feather name="user" size={18} color="gray" />

                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">First Name</Text>
                            <TextInput
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                                placeholder="John"
                                className="w-full"
                            />
                        </View>
                    </View>
                    {touched.firstName && errors.firstName && <Text className="-mt-3 text-h6 text-red">{errors.firstName}</Text>}

                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Feather name="user" size={18} color="gray" />

                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">Last Name</Text>
                            <TextInput
                                value={values.lastName}
                                onChangeText={handleChange('lastName')}
                                placeholder="Doe"
                                className="w-full"
                            />
                        </View>
                    </View>
                    {touched.lastName && errors.lastName && <Text className="-mt-3 text-h6 text-red">{errors.lastName}</Text>}

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

                    <Text className="font-h4 text-text">
                        By clicking Create Account, you acknowledge you have read and agreed to our
                        <Text className="text-primary">Terms of Use</Text> and <Text className="text-primary">Privacy Policy</Text>
                    </Text>

                    <TouchableOpacity onPress={() => handleSubmit()} className="w-full">
                        <Text className="text-white bg-primary text-center rounded-md text-h4 p-3">Create Account</Text>
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
            Already having an account? <Text onPress={() => router.replace("/auth/signin")} className="text-primary">Login in here</Text>
        </Text>
    </View>;
};