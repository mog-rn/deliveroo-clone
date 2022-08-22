import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  SafeAreaViewComponent,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../styles/GlobalStyles";
import { ChevronDownIcon } from "react-native-heroicons/solid";
import {
  AdjustmentsIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView
      style={GlobalStyles.droidSafeArea}
      className="flex-1 pt-8 bg-white"
    >
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2 ">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          resizeMode="cover"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl items-center">
            <Text>Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>

        <UserIcon color="#00CCBB" size={35} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <SearchIcon color="gray" />
          <TextInput
            placeholder="Restaurant and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
            paddingBottom: 100
        }}
      >
        {/* Categories */}
        <Categories />
        {/* Featured View */}
        </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
