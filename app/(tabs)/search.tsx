import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, ListRenderItem } from 'react-native';

type SearchResult = string; 

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);

  // Mock data for demonstration
  const mockData: SearchResult[] = ['Scheme A', 'Scheme B', 'Scheme C', 'Artisan Support'];

  const handleSearch = () => {
    const filteredResults = mockData.filter((item) =>
      item.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filteredResults);
  };

  const renderResult: ListRenderItem<SearchResult> = ({ item }) => (
    <View className="bg-white rounded-lg shadow p-4 mb-2">
      <Text className="text-gray-800 font-medium">{item}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Header */}
      <Text className="text-2xl font-bold text-blue-600 mb-4">Search Schemes</Text>

      {/* Search Bar */}
      <View className="flex-row items-center bg-white rounded-lg shadow p-2">
        <TextInput
          className="flex-1 text-gray-800 px-2"
          placeholder="Type here to search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text className="text-blue-600 font-medium">Search</Text>
        </TouchableOpacity>
      </View>

      {/* Results Section */}
      <FlatList
        className="mt-4"
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderResult}
        ListEmptyComponent={() =>
          searchQuery ? (
            <Text className="text-center text-gray-600 mt-4">No results found</Text>
          ) : null
        }
      />
    </View>
  );
};

export default SearchPage;
