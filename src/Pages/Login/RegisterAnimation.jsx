import React from 'react';
import { useLottie } from "lottie-react";
import errors from "../../assets/lottie/register/110817-account-created (1).json";
const RegisterAnimation = () => {
    const options = {
        animationData: errors,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      return <>{View}</>;
    };

export default RegisterAnimation;