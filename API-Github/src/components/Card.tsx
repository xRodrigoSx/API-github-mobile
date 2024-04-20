import { useEffect, useState } from "react";
import { Repository } from "../types/Repository";
import { baseUrl } from "../utils/constants";
import axios from "axios";

interface Props {
  repository: Repository;
}

const Card = ({ repository }: Props) => {
    const [openComment, setOpenComments] = useState<boolean>(false);
    const [commentsList, setCommentsList] = useState<Repository[]>([]);

  const getComments = async () => {
    try {
      const response = await axios.get<Repository[]>(
        `${baseUrl}/comments?postId=${repository.id}`
      );
      setCommentsList(response.data);
    } catch (error) { }
  };

  const handleOpen = async () => {
    if (!openComment) {
      await getComments();
    }
    setOpenComments(!openComment);
  };

  return (
  );
};

const styles = StyleSheet.create({
});

export default Card;