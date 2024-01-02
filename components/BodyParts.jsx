import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyPartCard = ({ router, item, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(4000)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity
        style={{
          width: wp(44),
          height: wp(52),
        }}
        className="flex justify-end p-4 mb-4"
        onPress={() => router.push({ pathname: "/exercises", params: item })}
      >
        <Image
          source={
            typeof item.image === "string" ? { uri: item.image } : item.image
          }
          resizeMode="cover"
          style={{
            width: wp(44),
            height: wp(52),
          }}
          className="rounded-[35px] absolute"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          style={{ width: wp(44), height: hp(15) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          className="absolute bottom-0 rounded-b-[35px]"
        />
        <Text
          className="text-white font-semibold text-center tracking-wide"
          style={{
            fontSize: hp(2.3),
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const BodyParts = () => {
  const router = useRouter();

  return (
    <View className="mx-4">
      <Text
        style={{
          fontSize: hp(3),
        }}
        className="font-semibold text-neutral-700"
      >
        Exercies
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
};

export default BodyParts;
