import React from 'react'
import Typography from '@mui/material/Typography'

export const Text = ({children, title, subtitle, action, caption, gutterBottom, paragraph, textAlign="left", color="#22212c"}) => {
  return(
    <Typography 
      gutterBottom={gutterBottom} 
      paragraph={paragraph} 
      textAlign={textAlign}
      fontWeight={ title ? 700       : subtitle ? 400      : action ? 400      : caption ? 700 : 300} 
      fontSize={   title ? 16        : subtitle ? 13       : action ? 11       : caption ? 12 : 8} 
      lineHeight={ title ? "19.84px" : subtitle ? "12.4px" : action ? "12.4px" : caption ? "14.88px" :"10px"} 
      letterSpacing={"-2%"} 
      color={color}
    >
      {children}
    </Typography>
  )
}
