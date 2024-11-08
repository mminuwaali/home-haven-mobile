import React from "react";
import { Formik } from "formik";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import { toFormikValidationSchema } from "zod-formik-adapter";
import { forgotPasswordSchema } from "@/src/constants/schema";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ForgotPasswordScreen() {

    return <View style={{ gap: 30 }} className="cover py-1/5">
        <View className="w-full">
            <Text className="font-bold text-h1">Forgot Password?</Text>
            <Text className="text-h4">
                Enter your email address to receive a password reset link.
            </Text>
        </View>

        <Formik
            initialValues={{ email: "" }}
            onSubmit={() => { router.replace("/auth/reset-password") }}
            validationSchema={toFormikValidationSchema(forgotPasswordSchema)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                <View style={{ gap: 15 }} className="w-full">
                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Ionicons name="mail-outline" size={18} color="gray" />
                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">Email</Text>
                            <TextInput
                                placeholder="username@mail.com"
                                className="w-full"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        </View>
                    </View>
                    {touched.email && errors.email && (
                        <Text className="-mt-3 text-red text-h6">{errors.email}</Text>
                    )}

                    <TouchableOpacity onPress={() => handleSubmit()} className="w-full">
                        <Text className="text-white bg-primary text-center rounded-md text-h4 p-3">Send Reset Link</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>

        <Text className="text-center text-h4">
            Remember your password? <Text onPress={() => router.replace("/auth/signin")} className="text-primary">Login here</Text>
        </Text>
    </View>;
}