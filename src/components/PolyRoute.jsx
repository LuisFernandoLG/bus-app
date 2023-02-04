import React from 'react'
import { Polyline } from 'react-native-maps'

export const PolyRoute = ({route}) => {
  if (route === null) return null

  return (
    <Polyline
        coordinates={route.points}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          "#7F0000",
          "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
          "#B24112",
          "#E5845C",
          "#238C23",
          "#7F0000",
        ]}
        strokeWidth={4}
      />
  )
}



