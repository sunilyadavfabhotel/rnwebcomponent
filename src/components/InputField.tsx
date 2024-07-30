import React, {useState} from 'react';
import {View, TextInput, Text} from 'react-native';

const InputComponent = () => {
  const [text, setText] = useState('');

  return (
    <View className="p-4">
      <TextInput
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Type here"
        value={text}
        onChangeText={setText}
      />
      <Text className="mt-2 text-lg">You entered: {text}</Text>
    </View>
  );
};

export {InputComponent};
