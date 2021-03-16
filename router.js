import { createSwitchNavigator } from "react-navigation";
  import SignedOut from "./components/SignedOut";
  import SignedIn from "./components/SignedIn";
  
  export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: SignedOut
        },
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
  };
  