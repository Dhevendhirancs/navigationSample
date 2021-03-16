import { createAppContainer, createStackNavigator } from "react-navigation";
import Login from "../login";

const SignedOut = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        }
    },
    {
        initialRouteName: "Login"
    }
);

export default SignedOut;
