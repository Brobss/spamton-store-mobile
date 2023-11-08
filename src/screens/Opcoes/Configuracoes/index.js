import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Switch,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Perfil({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleDark = () => setIsDark((previousState) => !previousState);

  return (
    <ScrollView style={styles.container}>
      <ScrollView>
        <View style={styles.option}>
          <MaterialCommunityIcons name="bell-outline" size={35} color="#fff" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Ativar Notificações</Text>
          </ScrollView>
          <Switch
            trackColor={{ false: "#767577", true: "#c0c959" }}
            thumbColor={isEnabled ? "#eeff24" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.option}>
          <MaterialCommunityIcons name="weather-night" size={35} color="#fff" />
          <ScrollView style={styles.info}>
            <Text style={styles.title}>Modo Escuro</Text>
          </ScrollView>
          <Switch
            trackColor={{ false: "#767577", true: "#c0c959" }}
            thumbColor={isDark ? "#eeff24" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDark}
            value={isDark}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252525",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  info: {
    marginLeft: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  description: {
    fontSize: 16,
    color: "#999",
  },
  menuAdicional: {
    marginTop: 30,
  },

  opcoesAdicionais: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    border: 1,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionName: {
    marginLeft: 25,
    color: "#ccc",
    fontSize: 15,
  },
});
