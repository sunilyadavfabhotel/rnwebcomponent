import React, {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';

const AlertModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <TouchableOpacity
        className="bg-blue-500 p-3 rounded-md"
        onPress={showModal}>
        <Text className="text-white text-lg">Show Alert</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}>
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-5 rounded-md w-3/4">
            <Text className="text-lg mb-4">This is an alert message!</Text>
            <TouchableOpacity
              className="bg-red-500 p-3 rounded-md"
              onPress={hideModal}>
              <Text className="text-white text-lg text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export {AlertModal};
