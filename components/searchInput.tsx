import { icons } from "@/constants/icons";
import { useFocusEffect, useNavigationState } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { Image, TextInput, View } from "react-native";

const SearchInput = ({
  onPress,
  onChangeText,
  value,
  autoFocus,
}: {
  onPress?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  autoFocus?: boolean;
}) => {
  const inputRef = useRef<TextInput>(null);

  const navigated = useNavigationState(
    (state) => state.routes[state.index].name === "search"
  );

  useFocusEffect(
    useCallback(() => {
      if (navigated) {
        const timer = setTimeout(() => {
          inputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
      }
    }, [navigated])
  );

  const isNavigationButton = onPress && !onChangeText;

  return (
    <View className="items-center flex-row justify-center px-5 py-3 rounded-full bg-[#151314]">
      <Image
        source={icons.search}
        className="size-7"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        className="flex-1 ml-5 text-white text-2xl"
        placeholder="Search movie..."
        placeholderTextColor="#A8B5DB"
        autoCorrect={false}
        autoFocus={autoFocus}
        onChangeText={onChangeText}
        value={value}
        ref={inputRef}
        onPress={onPress}
        editable={!isNavigationButton}
      />
    </View>
  );
};

export default SearchInput;
