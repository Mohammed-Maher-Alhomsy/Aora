import { useState } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";

import { icons } from "../constants";

const SearchInput = ({
  value,
  title,
  placeholder,
  otherStyles,
  keyboardType,
  handleChangeText,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  icons;

  return (
    <View className="w-full h-16 border-2 border-black-200 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        value={value}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search for a video topic"
        keyboardType={keyboardType}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
        className="text-base mt-0.5 text-white flex-1 font-pregular"
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
