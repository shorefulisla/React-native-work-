import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../Utils/Colors';
import PageHeading from '../../Components/PageHeading';

export default function ContactUsScreen() {
  const contactOptions = [
    {
      id: 1,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      icon: 'call',
      action: () => Linking.openURL('tel:+15551234567'),
    },
    {
      id: 2,
      title: 'Email Us',
      description: 'support@homeserviceapp.com',
      icon: 'mail',
      action: () => Linking.openURL('mailto:support@homeserviceapp.com'),
    },
    {
      id: 3,
      title: 'Visit Website',
      description: 'www.homeserviceapp.com',
      icon: 'globe',
      action: () => Linking.openURL('https://www.homeserviceapp.com'),
    },
    {
      id: 4,
      title: 'Live Chat',
      description: 'Chat with our support team',
      icon: 'chatbubbles',
      action: () => Alert.alert('Coming Soon', 'Live chat feature will be available soon!'),
    },
  ];

  const handleContactPress = (action) => {
    action();
  };

  return (
    <View style={styles.container}>
      <PageHeading title="Contact Us" />
      
      <ScrollView style={styles.content}>
        <View style={styles.headerSection}>
          <Text style={styles.headerTitle}>Get in Touch</Text>
          <Text style={styles.headerSubtitle}>
            We're here to help! Reach out to us through any of the following methods.
          </Text>
        </View>

        <View style={styles.contactOptionsContainer}>
          {contactOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.contactOption}
              onPress={() => handleContactPress(option.action)}
            >
              <View style={styles.iconContainer}>
                <Ionicons name={option.icon} size={24} color={Colors.PRIMARY} />
              </View>
              <View style={styles.contactInfo}>
                <Text style={styles.contactTitle}>{option.title}</Text>
                <Text style={styles.contactDescription}>{option.description}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={Colors.GRAY} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>Business Hours</Text>
          <View style={styles.hoursContainer}>
            <Text style={styles.hoursText}>Monday - Friday: 9:00 AM - 6:00 PM</Text>
            <Text style={styles.hoursText}>Saturday: 10:00 AM - 4:00 PM</Text>
            <Text style={styles.hoursText}>Sunday: Closed</Text>
          </View>
        </View>

        <View style={styles.additionalInfo}>
          <Text style={styles.infoTitle}>Office Address</Text>
          <Text style={styles.addressText}>
            123 Service Street{'\n'}
            Business District{'\n'}
            City, State 12345
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  headerSection: {
    marginBottom: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'outfit-bold',
    color: Colors.PRIMARY,
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'outfit',
    color: Colors.GRAY,
    textAlign: 'center',
    lineHeight: 22,
  },
  contactOptionsContainer: {
    marginBottom: 30,
  },
  contactOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 50,
    height: 50,
    backgroundColor: Colors.PRIMARY_LIGHT,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    color: Colors.BLACK,
    marginBottom: 5,
  },
  contactDescription: {
    fontSize: 14,
    fontFamily: 'outfit',
    color: Colors.GRAY,
  },
  additionalInfo: {
    marginBottom: 25,
    padding: 20,
    backgroundColor: Colors.LIGHT_GRAY,
    borderRadius: 10,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'outfit-medium',
    color: Colors.PRIMARY,
    marginBottom: 10,
  },
  hoursContainer: {
    gap: 5,
  },
  hoursText: {
    fontSize: 14,
    fontFamily: 'outfit',
    color: Colors.BLACK,
  },
  addressText: {
    fontSize: 14,
    fontFamily: 'outfit',
    color: Colors.BLACK,
    lineHeight: 20,
  },
});
