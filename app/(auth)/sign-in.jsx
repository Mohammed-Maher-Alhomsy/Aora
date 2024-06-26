import { useState } from "react";
import { Alert, Image, ScrollView, Text, View } from "react-native";

import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";
import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [form, setForm] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmittin] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the fields");
    }

    setIsSubmittin(true);

    const { email, password } = form;

    try {
      await signIn(email, password);

      const result = await getCurrentUser();

      setUser(result);
      setIsLoggedIn(true);

      Alert.alert("Success", "User signed in successfully");

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmittin(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView>
        <View className="w-full min-h-[85vh] justify-center px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            placeholder="Enter Your Email"
            value={form.email}
            otherStyles="mt-7"
            keyboardType="email-address"
            handleChangeText={(e) => setForm((prev) => ({ ...prev, email: e }))}
          />

          <FormField
            title="Password"
            placeholder="Enter Your Password"
            value={form.password}
            otherStyles="mt-7 mb-10"
            handleChangeText={(e) =>
              setForm((prev) => ({ ...prev, password: e }))
            }
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Don't have account?
            </Text>

            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
