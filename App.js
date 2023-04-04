import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Livros from "./screens/Livros";
import Filmes from "./screens/Filmes";
import Series from "./screens/Series";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Filmes" component={Filmes} />
      <Tab.Screen name="Livros" component={Livros} />
      <Tab.Screen name="Séries" component={Series} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Livros" component={Livros} />
//           <Stack.Screen name="Series" component={Series} />
//           <Stack.Screen name="Filmes" component={Filmes} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }
