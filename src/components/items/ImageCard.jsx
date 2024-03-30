import React from 'react'
import { CardMedia } from '@mui/material'

export const ImageCard = ({img, alt, config}) => {
  return (
    <CardMedia
        component="img"
        image={img}
        alt={alt}
        sx={config}
    />
  )
}
