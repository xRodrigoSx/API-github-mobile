import { StyleSheet, View, Text, Image, Button } from "react-native";
import { Feather } from '@expo/vector-icons';
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Repository } from "../types/Repository";
import { baseUrl } from "../utils/constants";

interface Props {
  repository: Repository;
}

const Card = ({ repository }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fullname}>{repository.full_name.split(repository.owner.login + '/')}</Text>
      <Text style={styles.description}>{repository.description}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Image source={{ uri: repository.owner.avatar_url }} style={styles.avatar} />
      <View style={{ flexDirection: 'column', marginVertical: 0 }}>
        <Text style={styles.login}>{repository.owner.login}</Text>
      <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center'}}>
        <Feather name="star" size={24} color="black" />
        <Text style={styles.stargazers}>{repository.stargazers_count}</Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'center'}}>
        <Feather name="eye" size={24} color="black" />
        <Text style={styles.watchers}>{repository.watchers_count}</Text>
      </View>
      <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>Ver mais</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 5
  },
  fullname: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 10,
  },
  login: {
    bottom: 5,
    right: 0,
  },
  avatar: {
    bottom: 8,
    borderRadius: 15,
    width: 100,
    height: 100,
  },
  stargazers: {
    right: 0,
  },
  watchers: {
    right: 0,
  }
});

export default Card;