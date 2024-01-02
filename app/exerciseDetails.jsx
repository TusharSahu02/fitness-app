import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from "react-native-vector-icons/AntDesign";
const exerciseDetails = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  // console.log("data : ", item);
  return (
    <View className="flex-1 flex">
      <View className="shadow-md bg-neutral-200 rounded-b-[40px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit="cover"
          style={{
            width: wp(100),
            height: wp(100),
          }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-10 right-0"
      >
        <AntDesign name="closecircle" size={hp(5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView
        className="mx-4 space-y-2 mt-3"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
      >
        <Text
          style={{
            fontSize: hp(3.5),
          }}
          className="font-semibold text-neutral-800 tracking-wide capitalize"
        >
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className="font-semibold text-neutral-700 tracking-wide"
        >
          Equipment :
          <Text className="font-bold text-neutral-800 capitalize">
            {" "}
            {item?.equipment}
          </Text>
        </Text>

        <Text
          style={{
            fontSize: hp(2),
          }}
          className="font-semibold text-neutral-700 tracking-wide"
        >
          Secondary Muscles :
          <Text className="font-bold text-neutral-800 capitalize">
            {" "}
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: hp(2),
          }}
          className="font-semibold text-neutral-700 tracking-wide"
        >
          Target :
          <Text className="font-bold text-neutral-800 capitalize">
            {" "}
            {item?.target}
          </Text>
        </Text>
        <Text
          style={{
            fontSize: hp(3),
          }}
          className="font-semibold text-neutral-800 tracking-wide capitalize"
        >
          Instructions
        </Text>
        {item.instructions.split(",").map((ins, index) => {
          return (
            <Text
              key={index}
              style={{
                fontSize: hp(1.7),
              }}
              className="text-neutral-800"
            >
              {index + 1}: {ins}
            </Text>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default exerciseDetails;
