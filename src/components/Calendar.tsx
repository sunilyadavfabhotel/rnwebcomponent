import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {Calendar as RNCalendar} from 'react-native-calendars';

const Calendar = () => {
  const [date, setDate] = useState<string | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const handleDatePress = (_date: string) => {
    setDate(_date);
    setShowModal(false);
  };

  return (
    <View>
      <Pressable
        className="border-2 p-2 rounded-lg border-lime-900"
        onPress={() => setShowModal(prev => !prev)}>
        <Text>{date === undefined ? 'Please select a date' : date}</Text>
      </Pressable>
      {showModal && (
        <RNCalendar
          initialDate={date}
          markedDates={{[date as string]: {selected: true}}}
          onDayPress={day => {
            handleDatePress(day.dateString);
          }}
        />
      )}
    </View>
  );
};

export {Calendar};
