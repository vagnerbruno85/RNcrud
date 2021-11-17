import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack'
import { Button } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { UsersProvider } from './context/UsersContext';


const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName="UserList"
                screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name= 'UserList'
                        component={UserList}
                        options={() => {
                            return {
                                title: "Lista de usuários",
                                headerRight:() => (
                                    <Button
                                        onPress={()=> navigation.navigate('UserForm')}
                                        type= "clear"
                                        icon={<Icon name= "add" size={25} color='#fff' />}
                                    />
                                )

                            }
                        }}
                    />
                    <Stack.Screen
                        name= 'UserForm'
                        component={UserForm}
                        options= {{
                            title: "Formulario de usuários"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    );
}

const screenOptions = {
    headerStyle:{
        backgroundColor:'#f4511e'
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
        fontWeigth:'bold'},
}
