import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarWidth = useRef(new Animated.Value(0)).current;

  const toggleSidebar = () => {
    if (sidebarVisible) {
      Animated.timing(sidebarWidth, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }).start(() => setSidebarVisible(false));
    } else {
      setSidebarVisible(true);
      Animated.timing(sidebarWidth, {
        toValue: 250,
        duration: 0,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View className="w-40">
      <TouchableOpacity className="p-4 bg-blue-500 " onPress={toggleSidebar}>
        <Text className="text-white">Toggle Sidebar</Text>
      </TouchableOpacity>
      {sidebarVisible && (
        <Animated.View
          style={{width: sidebarWidth}}
          className="left-0 top-0 bottom-0 bg-white z-50 p-4">
          <View className="p-4 bg-black w-40 z-50">
            <Text className="text-lg text-white mb-2">Sidebar Item 1</Text>
            <Text className="text-lg text-white mb-2">Sidebar Item 2</Text>
            <Text className="text-lg text-white">Sidebar Item 3</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
};

export {Sidebar};
