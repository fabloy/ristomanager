import React, { useEffect, useState } from "react";

import Alert from 'react-bootstrap/Alert';

function AlertElement({variantSelected, text}) {
    const variants = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ]
      const [variantToShow, setVariantToShow] = useState("")
      const variantFiltered = variants.filter(v=>v===variantSelected)

      useEffect(()=>{
        variantFiltered!== [] ? setVariantToShow(variantFiltered) : setVariantToShow("")
      },[variantSelected])

  return (
      variantFiltered.length>0 ? 
        <Alert key={variantToShow} variant={variantToShow}>
         {text}
        </Alert>
        : 
        <strong>! variantSelected props in parent component is not valid !</strong>
  );
}

export default AlertElement;