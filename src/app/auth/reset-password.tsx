import React from "react";
import { Formik } from "formik";
import { router } from "expo-router";
import { resetPasswordSchema } from "@/src/constants/schema";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ResetPasswordScreen() {
    const [visible, setVisible] = React.useState(false);
    const [confirmVisible, setConfirmVisible] = React.useState(false);

    return <View style={{ gap: 30 }} className="cover py-1/5">
        <View className="w-full">
            <Text className="font-bold text-h1">Reset Password</Text>
            <Text className="text-h4">
                Enter your new password to reset.
            </Text>
        </View>

        <Formik
            initialValues={{ password: '', confirmPassword: '' }}
            onSubmit={(values) => { console.log(values); }}
            validationSchema={toFormikValidationSchema(resetPasswordSchema)}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <View style={{ gap: 15 }} className="w-full">
                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Ionicons name="lock-closed-outline" size={18} color="gray" />
                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">New Password</Text>
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

                    <View style={{ gap: 5 }} className="w-full flex-row items-center bg-white border border-gray-200 rounded-md px-2">
                        <Ionicons name="lock-closed-outline" size={18} color="gray" />
                        <View className="flex-1 items-start">
                            <Text className="text-h6 text-gray-500 scale-y-90">Confirm Password</Text>
                            <TextInput
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                secureTextEntry={!confirmVisible}
                                placeholder="***********"
                                className="w-full"
                            />
                        </View>
                        <MaterialCommunityIcons onPress={() => setConfirmVisible(!confirmVisible)} name={confirmVisible ? 'eye-off-outline' : 'eye-outline'} size={18} color="gray" />
                    </View>
                    {touched.confirmPassword && errors.confirmPassword && <Text className="-mt-3 text-h6 text-red">{errors.confirmPassword}</Text>}

                    <TouchableOpacity onPress={() => handleSubmit()} className="w-full">
                        <Text className="text-white bg-primary text-center rounded-md text-h4 p-3">Reset Password</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>

        <Text className="text-center text-h4">
            Back to <Text onPress={() => router.replace("/auth/signin")} className="text-primary">Login</Text>
        </Text>
    </View>;
}