import { TextInput, StyleSheet, TouchableOpacity, Text, View, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Repository } from "../types/Repository";
import { baseUrl } from "../utils/constants";
import Card from "../components/Card";
import axios from "axios";

const User = () => {
    const [userInput, setUserInput] = useState<string>('');
    const [repositoryList, setRepositoryList] = useState<Repository[]>([]);

    const handleSearchUser = async () => {
        if (userInput !== "") {

            const url = `${baseUrl}/${userInput}/repos`
            try {
                const response = await axios.get<Repository[]>(url);
                setRepositoryList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text>Buscador de Github</Text>
            <TextInput value={userInput} onChangeText={setUserInput} placeholder="Escreva o nome de um usuário do Github" />
            <TouchableOpacity onPress={handleSearchUser}>
                <Text>Buscar</Text>
            </TouchableOpacity>
            {repositoryList.length > 0 ? (
                <FlatList
                    data={repositoryList}
                    renderItem={({ item }) => <Card repository={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text>Sem Informações</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 40,
},

});

export default User;
