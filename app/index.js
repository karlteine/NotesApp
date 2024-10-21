import { Text, View } from "react-native";
import Header from "../components/Header"
import HomeScreen from "../Screens/HomeScreen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Header/>
      <HomeScreen />
    </View>
  );
}
