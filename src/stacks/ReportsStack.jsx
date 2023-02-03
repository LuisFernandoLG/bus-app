import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { ReportDoneScreen } from '../screens/ReportDoneScreen';
import { ReportScreen } from '../screens/ReportScreen';
import { ReportsScreen } from '../screens/ReportsScreen';

export const ReportsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="reports" component={ReportsScreen} options={{headerShown:false}}/>
      <Stack.Screen name="report" component={ReportScreen}/>
      <Stack.Screen name="reportDone" component={ReportDoneScreen}/>
    </Stack.Navigator>
  );
}
