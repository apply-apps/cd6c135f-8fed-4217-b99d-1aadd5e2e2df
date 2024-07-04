// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, FlatList, View, ScrollView } from 'react-native';

// HomeScreen.js
const stories = [
  { id: '1', title: 'Cinderella' },
  { id: '2', title: 'Snow White' },
  { id: '3', title: 'Little Red Riding Hood' },
  { id: '4', title: 'The Three Little Pigs' },
  { id: '5', title: 'Hansel and Gretel' },
];

const HomeScreen = ({ navigation }) => {
  const renderStory = ({ item }) => (
    <TouchableOpacity style={styles.storyItem} onPress={() => navigation.navigate('Story', { title: item.title })}>
      <Text style={styles.storyTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fairy Tales</Text>
      <FlatList
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    alignItems: 'center',
  },
  storyItem: {
    padding: 15,
    backgroundColor: '#E5CABF',
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  storyTitle: {
    fontSize: 18,
  },
});

// StoryScreen.js
const storyContent = {
  'Cinderella': 'Once upon a time, in a faraway land, there was a girl named Cinderella...',
  'Snow White': 'Once upon a time, in a faraway land, there was a beautiful princess named Snow White...',
  'Little Red Riding Hood': 'Once upon a time, there was a little girl who always wore a red riding hood...',
  'The Three Little Pigs': 'Once upon a time, there were three little pigs who left their home to build their own houses...',
  'Hansel and Gretel': 'Once upon a time, there were two siblings named Hansel and Gretel who were lost in the forest...',
};

const StoryScreen = ({ route }) => {
  const { title } = route.params;
  return (
    <SafeAreaView style={storyStyles.container}>
      <ScrollView contentContainerStyle={storyStyles.scrollView}>
        <Text style={storyStyles.title}>{title}</Text>
        <Text style={storyStyles.content}>{storyContent[title]}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const storyStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20,
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});

// App.js
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}