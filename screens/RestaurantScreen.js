 import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
 import React, { useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from 'react-native-feather'
import { themeColors } from '../theme';
import Navigation from '../navigation';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../slices/restaurantSlice';
 
 export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    const dispatch = useDispatch();
    useEffect(()=>{
        if(item && item.id) {
            dispatch(setRestaurant({...item}))
        }
    },[])
    console.log('Ресторан', item); 
   return (
     <View>
        <CartIcon />
       <ScrollView>
        <View className="relative">
            <Image className="w-full h-72" source={item.image}/>
            <TouchableOpacity className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full"
            onPress={() => navigation.goBack()} 
            >
                <Icon.ArrowLeft height={20} width={20} stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
            <View
            style={{borderTopLeftRadius: 40, borderTopLeftRadius: 40 }}
            className="bg-white -mt-12 pt-6"
            >
                <View className="px-5">
                    <Text className="text-3xl font-bold">{item.name}</Text>
                    <View 
                    className="flex-row space-x-2 my-1">
                        <View
                        className="flex-row items-center space-x-1"
                        >
                            <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                            <Text className="text-xs">
                                <Text className="text-green-700">{item.stars}</Text>
                                <Text className="text-gray-700">({item.reviews} отзывов) <Text className="font-semibold">{item.category}</Text></Text>
                                <Text></Text>
                            </Text>
                        </View>
                        <View className="flex-row items-center space-x-1">
                            <Icon.MapPin color="gray" height="15" wight="15" />
                            <Text className="text-gray-500 text-xs">{item.address}</Text>
                        </View>
                    </View>
                    <Text className="text-gray-500 mt-2">{item.description}</Text>
                </View>
                <View className="px-4 py-4 text-2xl font-bold">
                <Text className="px-4 py-4 text-2xl font-bold">Меню</Text>
                {item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index} /> )}
            </View>
            </View>
            </View>
       </ScrollView>
     </View>
   )
 }