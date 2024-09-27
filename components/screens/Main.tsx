import { Session } from "@supabase/supabase-js";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Button, Text } from "@rneui/themed";
import { supabase } from "../../lib/supabase";

export default function Main({ session }: { session: Session }) {
  const logout = () => {
    supabase.auth.signOut();
  };

  return (
    <SafeAreaView style={styles.main}>
      <Text>You are now logged in</Text>
      <Button onPress={logout}>Logout</Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
