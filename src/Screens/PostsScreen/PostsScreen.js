import { View, Text, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 50,
  },
});
