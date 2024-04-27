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
            <Text style={styles.title}>Buscador de Github</Text>
            <TextInput style={styles.input} value={userInput} onChangeText={setUserInput} placeholder="Escreva o nome de um usuário do Github" />
            {repositoryList.length > 0 ? (
                <FlatList
                    data={repositoryList}
                    renderItem={({ item }) => <Card repository={item} />}
                    keyExtractor={(item) => item.id.toString()}
                />
            ) : (
                <Text style={styles.response}>Sem Informações</Text>
            )}
            <TouchableOpacity style={styles.botao} onPress={handleSearchUser}>
                <Text style={styles.botao}>Buscar</Text>
            </TouchableOpacity>
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
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
    },
    botao: {
        backgroundColor: 'gray',
        color: 'white',
        fontSize: 20,
        padding: 5,
        borderRadius: 5,
    },
    response: {
        fontSize: 16,
        marginBottom: 10
        
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
    }

});

export default User;
