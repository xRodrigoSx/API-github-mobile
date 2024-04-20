import { useEffect, useState } from "react";
import { Repository } from "../types/Repository";
import { baseUrl } from "../utils/constants";
import { FlatList } from "react-native/Libraries/Lists/FlatList";
import Card from "../components/Card";
import axios from 'axios';
import { TextInput } from "react-native";

const User = () => {
    const [repositoryList, setrepositoryList] = useState<Repository[]>([]);
    const [UserInput, setUserInput] = useState<Repository[]>([]);

    const getRepositories = async () => {
        try {
            const response = await axios.get<Repository[]>(`${baseUrl}/repos`);
            setrepositoryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getRepositories();
    }, []);

    return (
        <view style={styles.container}>
            <TextInput onChangeText={setUserInput}/>
            <FlatList
                data={repositoryList}
                renderItem={({ item }) => <Card post={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </view>
    );
};

const styles = StyleSheet.create({

});

export default Posts;
