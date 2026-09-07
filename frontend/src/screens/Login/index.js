import { View, Text } from "react-native";


export default function Login() {
  return (
    <View>
      <Text>Login</Text>
import { View, Button } from "react-native";

export default function Login({ navigation }) {
  return (
    <View>
      <Button
        title="Entrar"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
      
    </View>
  );
}