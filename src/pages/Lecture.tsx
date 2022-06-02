import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '@constants/Colors';
import { LecturePageLabels } from '@constants/labels/LecturePageLabels';

const Lecture = () => {
  const UserInfoCard = () => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.Title}>{LecturePageLabels.ContactDetails.title}</Text>

        <View style={styles.infolayout}>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.namelabel}</Text>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.name} </Text>
        </View>

        <View style={styles.infolayout}>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.celllabel}</Text>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.cell}</Text>
        </View>

        <View style={styles.infolayout}>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.emailLabel}</Text>
          <Text style={styles.text}>{LecturePageLabels.ContactDetails.email}</Text>
        </View>
      </View>
    );
  };

  const assinmentCard = () => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.Title}>{LecturePageLabels.AssimentDetails.title}</Text>
      </View>
    );
  };

  const LectureInfoCard = () => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.Title}>{LecturePageLabels.LectureDetails.title} </Text>
        <View style={{ flexDirection: 'row-reverse', paddingHorizontal: 10, alignContent: 'flex-start' }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-evenly', paddingHorizontal: 10 }}>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.ageLabel}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.languageLabel}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.typeLabel}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.statusLabel}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.createdLabel}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.assinedLabel}</Text>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.age}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.langugae}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.type}</Text>
            <Text style={{ ...styles.text, backgroundColor: COLORS.BLUE }}>
              {LecturePageLabels.LectureDetails.status}
            </Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.created}</Text>
            <Text style={styles.text}>{LecturePageLabels.LectureDetails.assined}</Text>
          </View>
        </View>
      </View>
    );
  };

  const HistoryCard = () => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.Title}>{LecturePageLabels.HistoryDetails.title}</Text>
      </View>
    );
  };

  const LocationInfoCard = () => {
    return (
      <View style={styles.cardStyle}>
        <Text style={styles.Title}>{LecturePageLabels.LocationDetails.title}</Text>
        <View style={styles.infolayout}>
          <Text style={styles.text}>{LecturePageLabels.LocationDetails.addressLabel}</Text>
          <Text style={styles.text}>{LecturePageLabels.LocationDetails.address}</Text>
          <TouchableOpacity>
            <Text style={{ ...styles.text, color: COLORS.BLUE }}> {LecturePageLabels.LocationDetails.navigation}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const rendercards = () => {
    return (
      <ScrollView
        style={styles.contentContainer}
        contentContainerStyle={{ alignItems: 'flex-end', justifyContent: 'space-evenly', flex: 1 }}>
        {UserInfoCard()}
        {assinmentCard()}
        {LectureInfoCard()}
        {HistoryCard()}
        {LocationInfoCard()}
      </ScrollView>
    );
  };
  return <View style={{ flex: 1, backgroundColor: COLORS.LIGHT_GREY }}>{rendercards()}</View>;
};

const styles = StyleSheet.create({
  contentContainer: {
    // marginTop: 50,
    paddingVertical: 20,
    backgroundColor: COLORS.GRAY,
    alignSelf: 'stretch',
  },
  cardStyle: {
    backgroundColor: COLORS.WHITE,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  Title: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 17,
    padding: 5,
    textAlign: 'right',
  },
  /* The header takes up all the vertical space not used by the close button. */
  infolayout: {
    flexDirection: 'row-reverse',
    marginVertical: 10,
  },
});

export default Lecture;
