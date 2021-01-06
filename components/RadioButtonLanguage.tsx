import * as React from "react";
import { View} from "react-native";
import { RadioButton } from "react-native-paper";

export const RadioButtonLanguage=(props:any)=>{
    const {language} = props;
    return(
        <View>
            <RadioButton.Item label={language.label} value={language.value} />
        </View>
    );
}