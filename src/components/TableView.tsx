import React from 'react';
import {View, Text, ScrollView} from 'react-native';

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 28,
    city: 'New York',
    job: 'Engineer',
    company: 'ABC Corp',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St',
    country: 'USA',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 34,
    city: 'San Francisco',
    job: 'Designer',
    company: 'XYZ Inc',
    email: 'jane@example.com',
    phone: '987-654-3210',
    address: '456 Oak St',
    country: 'USA',
  },
  {
    id: 3,
    name: 'Sam Green',
    age: 22,
    city: 'Chicago',
    job: 'Developer',
    company: 'Tech Solutions',
    email: 'sam@example.com',
    phone: '555-555-5555',
    address: '789 Pine St',
    country: 'USA',
  },
  // Add more data as needed
];

const TableView = () => {
  return (
    <ScrollView className="p-4 flex-1">
      <ScrollView horizontal className="flex-1">
        <View className="min-w-full">
          <View className="flex flex-row border-b-2 border-gray-300">
            <Text className="p-2 font-bold flex-1 min-w-[100px]">ID</Text>
            <Text className="p-2 font-bold flex-1 min-w-[150px]">Name</Text>
            <Text className="p-2 font-bold flex-1 min-w-[80px]">Age</Text>
            <Text className="p-2 font-bold flex-1 min-w-[150px]">City</Text>
            <Text className="p-2 font-bold flex-1 min-w-[150px]">Job</Text>
            <Text className="p-2 font-bold flex-1 min-w-[200px]">Company</Text>
            <Text className="p-2 font-bold flex-1 min-w-[250px]">Email</Text>
            <Text className="p-2 font-bold flex-1 min-w-[150px]">Phone</Text>
            <Text className="p-2 font-bold flex-1 min-w-[200px]">Address</Text>
            <Text className="p-2 font-bold flex-1 min-w-[150px]">Country</Text>
          </View>
          {data.map(item => (
            <View
              key={item.id}
              className="flex flex-row border-b border-gray-200">
              <Text className="p-2 flex-1 min-w-[100px]">{item.id}</Text>
              <Text className="p-2 flex-1 min-w-[150px]">{item.name}</Text>
              <Text className="p-2 flex-1 min-w-[80px]">{item.age}</Text>
              <Text className="p-2 flex-1 min-w-[150px]">{item.city}</Text>
              <Text className="p-2 flex-1 min-w-[150px]">{item.job}</Text>
              <Text className="p-2 flex-1 min-w-[200px]">{item.company}</Text>
              <Text className="p-2 flex-1 min-w-[250px]">{item.email}</Text>
              <Text className="p-2 flex-1 min-w-[150px]">{item.phone}</Text>
              <Text className="p-2 flex-1 min-w-[200px]">{item.address}</Text>
              <Text className="p-2 flex-1 min-w-[150px]">{item.country}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export {TableView};
