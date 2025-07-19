import { View, Text, Image, FlatList, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const navigation = useNavigation();

  const profileMenu = [
    { name: "Home", icon: "home", action: "home" },
    { name: "My Booking", icon: "bookmark", action: "booking" },
    { name: "Contact Us", icon: "mail", action: "contact" },
    { name: "Logout", icon: "exit-sharp", action: "logout" },
  ];

  const handleMenuPress = async (action) => {
    switch (action) {
      case "home":
        // Navigate to Home tab - get the parent tab navigator
        navigation.getParent()?.navigate("home");
        break;
      case "booking":
        // Navigate to Booking tab - get the parent tab navigator
        navigation.getParent()?.navigate("booking");
        break;
      case "contact":
        // Navigate to ContactUs screen within the profile stack
        navigation.navigate("contact-us");
        break;
      case "logout":
        Alert.alert(
          "Logout",
          "Are you sure you want to logout?",
          [
            {
              text: "Cancel",
              style: "cancel",
            },
            {
              text: "Logout",
              style: "destructive",
              onPress: async () => {
                try {
                  await signOut();
                  // The app will automatically navigate to login screen
                  // because of the SignedIn/SignedOut logic in App.js
                } catch (error) {
                  Alert.alert("Error", "Failed to logout. Please try again.");
                  console.error("Logout error:", error);
                }
              },
            },
          ]
        );
        break;
      default:
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20, backgroundColor: Colors.PRIMARY_LIGHT }}>
        <Text style={{ fontFamily: "outfit-medium", fontSize: 26 }}>
          Profile
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Image
            source={{ uri: user?.imageUrl }}
            style={{ width: 90, height: 90, borderRadius: 99 }}
          />
          <Text
            style={{
              color: Colors.WHITE,
              fontSize: 20,
              fontFamily: "outfit-medium",
            }}
          >
            {user?.fullName}
          </Text>
          <Text style={{ color: Colors.WHITE }}>
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
      </View>
      
      <View style={{ paddingTop: 60, flex: 1 }}>
        <FlatList
          data={profileMenu}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => handleMenuPress(item.action)}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 15,
                marginBottom: 20,
                paddingHorizontal: 80,
                paddingVertical: 10,
              }}
            >
              <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
              <Text style={{ fontSize: 20, fontFamily: "outfit" }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
