import { Text, View, StyleSheet } from "react-native";
import Header from "../components/Header"
import HomeScreen from "../Screens/HomeScreen";
import { useState } from "react";
import { ScreenType } from "../constants/constants"
import AllNotesScreen from "../Screens/AllNotesScreen"
import AddNote from "../Screens/AddNote"
import BackButton from "../components/BackButton"

console.log(ScreenType);


export default function Index() {
  const [screen, setScreen] = useState(ScreenType.home)
  let content
  if(screen === ScreenType.addNote) {
    content = <AddNote/>
  } else if (screen === ScreenType.allNotes) {
    content = <AllNotesScreen />
  } else if (screen === ScreenType.home) {
    content = <HomeScreen onExit={(data) => {setScreen(data)}} />
  }

  return (
    <View style={styles.container}>
      <Header/>
      <BackButton onButtonClick={(data) => setScreen(data)} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})