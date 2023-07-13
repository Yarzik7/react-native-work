import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [textInput, setTextInput] = useState('');
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text>Enter your name</Text>
      <TextInput onChangeText={setTextInput} value={textInput} style={styles.input}/>
      <Button
        onPress={() => setText(textInput ? `Hello ${textInput.trim()}!` : '')}
        title="Say Hello!"
      />
      <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    fontSize: 16,
    color: '#333',
  },
});
