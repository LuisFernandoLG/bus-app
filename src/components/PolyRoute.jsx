import React from 'react'
import { Polyline } from 'react-native-maps'

export const PolyRoute = ({route}) => {
  if (route === null) return null

  return (
    <Polyline
        coordinates={route.points}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeWidth={4}
      />
  )
}



