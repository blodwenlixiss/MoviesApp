import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="flex-1 bg-[#030014]">
      <Image source={images.bg} className=" w-full absolute z-0" />
      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-12 h-8 mx-auto mt-24 mb-10" />
        <View className="flex-1 justify-center gap-5 flex-row items-center">
          <Image source={icons.person} className="size-6 rounded-full" />
          <Text className="text-white text-2xl font-bold">Profile</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
