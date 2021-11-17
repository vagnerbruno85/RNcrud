import React, { useReducer } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import users from '../data/users';
import { ListItem } from 'react-native-elements'

export default props => {
    function confirmUserDeletion(user){
        Alert.alert("Excluir Usuário","deseja excluir o usuário?", [{text:'Sim', onPress() {console.warn('Delete' + user.id)}},{text:"Não"}])
    }

    function getActions(user) {

        return (
            <>
                <Button 
                    onPress={()=> confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="edit" size ={25} color="orange"/>}
                />
                <Button 
                    onPress={()=> props.navigation.navigate('userForm', user)}
                    type="clear"
                    icon={<Icon name="delete" size ={25} color="red"/>}
                />
            </>
        )
    }

    function getUserItem({ item: user }){
        return (
            <ListItem
                leftAvatar={{source:{uri: user.avatarUrl}}}
                key={user.id}
                title={user.name}
                subtitle={user.email}
                bottomdivider
                rightElement={getActions(user)}
                onPress={()=> props.navigation.navigate('userForm', user)}
            />
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor= {user => user.id.toString()}
                data={users}
                renderItem={getUserItem}
            />

           
        </View>
    );
}