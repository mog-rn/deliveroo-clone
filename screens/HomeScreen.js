import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  SafeAreaViewComponent,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../styles/GlobalStyles";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="flex-1">
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          resizeMode="cover"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
