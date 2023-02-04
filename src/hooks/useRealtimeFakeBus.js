import React, { useEffect, useState } from 'react'
import { routes } from '../constants/mockups/routes'


function* infinite() {
  let index = 1;
  const path = routes[0].points
  const len = routes[0].points.length
  let isRasing = true

  while (true) {
    if(isRasing){
      for (let i = 0; i < path.length; i++) {
        const item = path[i];
        yield item
      }
      isRasing = false
    }else{
      for (let i = 0; i < path.length; i++) {
        const item = path[path.length - i];
        yield item
      }
      isRasing = true

    }
    
        
  }
}


export const useRealtimeFakeBus = ({speed}) => {
  const [busLocation, setBusLocation] = useState(null)
  const generator = infinite(); // "Generator
  const [initLocation, setinitLocation] = useState({ latitude: 23.058955, longitude: -109.694999 },) 


  useEffect(() => {
    const interval = setInterval(() => {
      setBusLocation(()=>generator.next().value)
    }, speed);
    return () => clearInterval(interval);
  }, []);



  return {
    busLocation,
    initLocation
  }

}
