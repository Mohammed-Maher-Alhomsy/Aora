import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustomButton";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [isSubmitting, setIsSubmittin] = useState(false);

  const submit = () => {};

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
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            placeholder="Enter Your Name"
            value={form.username}
            otherStyles="mt-7"
            handleChangeText={(e) => setForm((prev) => ({ ...prev, email: e }))}
          />

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
              Have an account already?
            </Text>

            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary mb-10"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
