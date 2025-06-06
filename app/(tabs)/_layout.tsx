import TabIcon from "@/components/tabBar";
import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0d23",
          borderRadius: 50,
          height: 53,
          position: "absolute",
          marginHorizontal: 20,
          marginBottom: 36,
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#151312",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} text="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "search",

          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} text="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "profile",

          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} text="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
