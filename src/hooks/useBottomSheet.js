import { useCallback, useMemo, useRef } from "react";

export const useBottomSheet = () => {
  const bottomSheetRef = useRef(null);

  
  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return {snapPoints, bottomSheetRef, handleSheetChanges}
}
