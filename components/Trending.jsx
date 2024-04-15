import { Text, FlatList } from "react-native";

const Trending = ({ posts }) => {
  return (
    <FlatList
      horizontal
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
    />
  );
};

export default Trending;
