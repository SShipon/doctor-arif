import React from 'react';
import { useLottie } from "lottie-react";
import contacts from "../../assets/lottie/95100-contact-us.json";
const UseContact = () => {
    const options = {
        animationData: contacts,
        loop: true
      };
    
      const { View } = useLottie(options);
    
      return <>{View}</>;
    
};

export default UseContact;