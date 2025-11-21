import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import "../global.css";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
        <Tabs.Screen
            name="courses"
            options={{
                tabBarLabel: "Courses",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book" size={size} color={color} />
                ),
            }}
        />
    </Tabs>
  );
}
