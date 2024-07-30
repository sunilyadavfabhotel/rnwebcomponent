import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity, FlatList} from 'react-native';

const AutoSuggestComponent = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allSuggestions = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Fig',
    'Grape',
    'Kiwi',
  ];

  const handleInputChange = (text: string) => {
    setQuery(text);
    if (text.length > 0) {
      const filteredSuggestions = allSuggestions.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setSuggestions(filteredSuggestions);
      setIsDropdownOpen(true);
    } else {
      setSuggestions([]);
      setIsDropdownOpen(false);
    }
  };

  const handleSuggestionPress = (suggestion: string) => {
    setQuery(suggestion);
    setSuggestions([]);
    setIsDropdownOpen(false);
  };

  return (
    <View className="p-4 w-full">
      <TextInput
        className="border border-gray-300 p-2 rounded-md"
        placeholder="Type to search..."
        value={query}
        onChangeText={handleInputChange}
      />
      {isDropdownOpen && (
        <FlatList
          data={suggestions}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              className="p-2"
              onPress={() => handleSuggestionPress(item)}>
              <Text className="text-lg">{item}</Text>
            </TouchableOpacity>
          )}
          className="border border-gray-500 rounded-md mt-2 bg-white"
        />
      )}
    </View>
  );
};

export {AutoSuggestComponent};
