import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';


export default ({route,navigation}) => {
    // console.warn(Object.keys(props))
    const [user,setUser]=useState(route.params ? route.params : {} )
    return (
        <View style={style.form}>
            <Text>Name:</Text>
            <TextInput
                onChangeText={name => setUser({...user, name})}
                placeholder="Informe o nome"
                value={user.name}
                style={style.input}
            />
            <Text>Email</Text>
            <TextInput
                onChangeText={email => setUser({...user, email})}
                placeholder="Informe o email"
                value={user.email}
                style={style.input}
            />
            <Text>Url do avatar</Text>       
            <TextInput
                onChangeText={ avatarUrl=> setUser({...user, avatarUrl})}
                placeholder="Informe o email"
                value={user.avatarUrl}
                style={style.input}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View>
    );
}

const style = StyleSheet.create({
    input:{
        heigth: 40,
        borderColor:'grey',
        borderWidth:1,
        marginBotton: 10,
    },
    form:{
        padding: 18,
    }
})