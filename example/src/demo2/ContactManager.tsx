import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import { getComponentList, ScreenComponent } from './__internal__/Utils';
import { styleValues } from './__internal__/Css';

export const ContactManagerRoute = 'ContactManagerScreen';
export function ContactManagerScreen(params: { navigation: any }): JSX.Element {
  return (
    <ScrollView>
      {getComponentList()
        .filter(
          (component: ScreenComponent) =>
            component.parentScreen === ContactManagerRoute
        )
        .map((component: ScreenComponent) => {
          console.log(`route: ${component.route}`);
          return (
            <View key={component.route} style={styleValues.scrollView}>
              <Button
                title={component.route}
                onPress={() => params.navigation?.navigate(component.route)}
              />
            </View>
          );
        })}
    </ScrollView>
  );
}
