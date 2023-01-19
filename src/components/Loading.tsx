import { ActivityIndicator } from "react-native";

export function Loading() {
    return(
       <view style = {{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center', 
          backgroundColor: 'blue'
       }}> 
       <ActivityIndicator color='purple'/>
       </view>
    );
}