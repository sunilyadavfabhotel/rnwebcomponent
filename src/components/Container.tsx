// create a react native container component

import React from 'react';
import {Text, View} from 'react-native';

const Container = ({
  children,
  title = '',
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <View className="mx-2 my-2 p-2 border-2 rounded-xl">
      {title && <Text className="text-xl text-blue-900">{title}</Text>}
      {children}
    </View>
  );
};

export {Container};
