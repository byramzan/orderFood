import { View, Text, Touchable, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { featured } from '../constants'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { selectRestaurant } from '../slices/restaurantSlice';
import { selectCartItems, selectCartTotal, removeFromCart } from '../slices/cartSlice';
import { useEffect, useState } from 'react';

export default function CartScreen() {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const [groupedItems, setGroupedItems] = useState({})
  const dispatch = useDispatch();

  useEffect(()=> {
    const items = cartItems.reduce((group, item) => {
    if (group[item.id]){
        group[item.id].push(item);
    } 
    else{
      group[item.id] = [item];
    }
    return group;
    },{})
    setGroupedItems(items);
  },[cartItems])
  return (
    <View className = "bg-white flex-1">
      <View className="relative py-4">
        <TouchableOpacity style={{backgroundColor: themeColors.bgColor(1)}}
        className="absolute z-10 p-1 rounded-full shadow top-5 left-2"
        onPress={() => navigation.goBack()}
        >
          <Icon.ArrowDown strokeWidth={3} stroke="white"/>
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-xl">Ваша корзина</Text>
          <Text className="text-center text-gray-500">{restaurant.name}</Text>
        </View>
        </View>
          <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 50
          }}
          className="bg-white pt-5 mt-8"
          >
            {
                Object.entries(groupedItems).map(([key, items]) => {
                  let dish = items[0];
                  return (
                    <View key={key} 
                    className="flex-row items-center
                     space-x-2 py-2 px-4 
                    bg-white rounded-3xl 
                    mx-2 mb-3 shadow-md"
                    > 
                      <Text className="font-bold" style={{color: themeColors.text}}>
                        {items.length}
                      </Text>
                      <Image className="h-14 w-14 rounded-full" source={dish.image}/>
                      <Text className="flex-1 font-bold text-gray-700 mr-2">{dish.name}</Text>
                      <Text className="font-semibold text-base">{dish.price} ₽</Text>
                      <TouchableOpacity className="p-1 rounded-full"
                      style={{backgroundColor: themeColors.bgColor(1)}}
                      onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                      >
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke='white'/>
                      </TouchableOpacity>
                    </View>
                  )
                })
            }
          </ScrollView>
          {/* общий ценник
           */}
          <View style={{backgroundColor: themeColors.bgColor(0.2)}} 
           className="p-6 px-8 rounded-t-3xl space-y-4 absolute bottom-0 left-0 right-0">
              <View className="flex-row justify-between">
                <Text className="font-extrabold">Цена</Text>
                <Text className="font-extrabold">{cartTotal} ₽</Text>
            </View>
            <View>
                <TouchableOpacity 
                style={{backgroundColor: themeColors.bgColor(1)}} 
                className="p-3 rounded-full">
                    <Text className="text-white text-center font-bold text-lg">Сделать заказ</Text>
                </TouchableOpacity>
            </View>
          </View>
    </View>
  )
}