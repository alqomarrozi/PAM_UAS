import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./redux/store";
import Product from "./pages/Product";
import ProductDetail from "./pages/DetailProduk";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Home" component={Product} />
          <Stack.Screen  name="Detail Produk" component={ProductDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
