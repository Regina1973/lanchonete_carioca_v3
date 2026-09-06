
import { View, Text } from "react-native";

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import styles from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      console.log("Email:", email);
      console.log("Senha:", senha);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lanchonete Carioca</Text>

      <Text style={styles.label}>E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Senha</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#ff6600"
        />
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}


// Adicionar botão na tela Login

<TouchableOpacity
  onPress={() => navigation.navigate("Cadastro")}
>
  <Text>
    Não possui conta? Cadastre-se
  </Text>
</TouchableOpacity>


//login passa a receber 

export default function Login({ navigation }) {


export default function Login() {
  return (
    <View>
      <Text>Lanchonete Carioca</Text>
    </View>
  );
}

export default function Login() {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
}

//login completo com os botoes

<TouchableOpacity
  style={styles.button}
  onPress={handleLogin}
>
  <Text style={styles.buttonText}>
    Entrar
  </Text>
</TouchableOpacity>

<TouchableOpacity
  onPress={() =>
    navigation.navigate("Cadastro")
  }
>
  <Text style={styles.link}>
    Não possui conta? Cadastre-se
  </Text>
</TouchableOpacity>