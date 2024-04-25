import { StyleSheet, View, Text, Image } from "react-native";
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
      <Text style={styles.fullname}>{repository.full_name.split(repository.owner.login+'/')}</Text>
      <Text style={styles.description}>{repository.description}</Text>
      <View>
      <Image source={{ uri: repository.owner.avatar_url }} style={styles.avatar} />
      <Text style={styles.login}>{repository.owner.login}</Text>
      </View>
      <Feather name="star" size={24} color="black" />
      <Text style={styles.stargazers}>{repository.stargazers_count}</Text>
      <Feather name="eye" size={24} color="black" />
      <Text style={styles.watchers}>{repository.watchers_count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  fullname: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
  },
  login: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  stargazers: {
    position: "absolute",
    right: 0,
  },
  watchers: {
    position: "absolute",
    right: 0,
  }
});

export default Card;