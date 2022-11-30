import React from 'react';
import { useLottie } from "lottie-react";
import errors from "../../assets/lottie/99078-contact-us.json";
const LoginAnimation = () => {
    const options = {
        animationData: errors,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      return <>{View}</>;
    };

export default LoginAnimation;