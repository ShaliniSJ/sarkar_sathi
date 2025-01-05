// HomePage.tsx
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // For navigation between screens

const HomePage = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center px-4">
      {/* Header Section */}
      <Text className="text-3xl font-bold text-center mb-6 text-blue-600">Welcome to Our App!</Text>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://example.com/your-image.jpg' }} // Replace with your image URL
        className="w-48 h-48 rounded-full mb-4"
        resizeMode="cover"
      />

      {/* Button Section */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        className="bg-blue-500 py-3 px-6 rounded-lg shadow-lg"
      >
        <Text className="text-white text-lg font-semibold">Go to Details</Text>
      </TouchableOpacity>

      {/* Footer Section */}
      <View className="mt-8">
        <Text className="text-sm text-gray-600">© 2025 Your Company</Text>
      </View>
    </View>
  );
};

export default HomePage;
