import { forwardRef, useImperativeHandle } from "react";
import { View } from "react-native";

const PasswordData = forwardRef(({ data, setData }, ref) => {

  useImperativeHandle(ref, () => {
    return {
      validate: (changeStep, prevStep) => {

      },
      goBack: (changeStep, prevStep) => {
        changeStep(prevStep);
      }
    }
  });

  return (
    <View>

    </View>
  )

});

export default PasswordData;