import React from 'react';
import { useLottie } from "lottie-react";
import errors from "../../assets/lottie/42479-page-not-found-404.json";
const UseNotFound = () => {
    const options = {
        animationData: errors,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      return <>{View}</>;
    };

export default UseNotFound;