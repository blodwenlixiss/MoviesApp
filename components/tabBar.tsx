import { images } from "@/constants/images";
import React from "react";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

const TabIcon = ({
  focused,
  icon,
  text,
}: {
  focused: boolean;
  icon: ImageSourcePropType;
  text: string;
}) => {
  if (focused) {
    return (
      <ImageBackground
        className="flex flex-row w-full flex-1 min-w-[125px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        source={images.highlight}
      >
        <Image source={icon} className="size-5" tintColor="#151312" />
        <Text className="text-black text-lg ml-4 font-semibold">{text}</Text>
      </ImageBackground>
    );
  }

  return (
    <View className="flex-1 w-[120px] min-h-14 bg-[#0f0d23] justify-center items-center mt-4 rounded-full">
      <Image source={icon} className="size-5" tintColor="#A8B5DB" />
    </View>
  );
};

export default TabIcon;
