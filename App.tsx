import { useState, useEffect } from "react";
import { supabase } from "./lib/supabase";
import Auth from "./components/screens/Auth";
import Main from "./components/screens/Main";
import { View } from "react-native";
import { Session } from "@supabase/supabase-js";
import SplashScreen from "./components/screens/Splash";

export default function App() {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(false);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <SplashScreen />;

  return (
    <View>
      {session && session.user ? (
        <Main key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
