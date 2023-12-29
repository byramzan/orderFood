import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from 'react-native-feather'
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({ item }) {
    const Navigation = useNavigation();
  return (
      <TouchableWithoutFeedback
        onPress={() => Navigation.navigate('Restaurant', {...item})}
      >
        <View style={{ marginRight: 6, backgroundColor: 'white', borderRadius: 20, overflow: 'hidden' }}>
          <Image style={{ borderRadius: 20, height: 150, width: 250 }} source={item.image} />
          <View className="px-3 pb-4 space-y-2">
            <Text className="mt-1 font-semibold text-lg">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                <Text className="text-xs ">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700">
                        ({item.reviews} review) · <Text className="font-semibold">{item.category}</Text>
                    </Text>
                </Text>

            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin color="gray" width="15" height="15" />
                <Text className="text-gray-700 text-xs">{item.address} </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    
  );
}
