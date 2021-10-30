import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {CardListItemProps} from '../../../types/cardListItemProps';

export const CardListItem = ({
  cardDetails,
}: {
  cardDetails: CardListItemProps;
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CardDetails', {data: cardDetails})}>
      <View style={CardListStyle.ITEM_BASE}>
        <Image
          source={CardImageSwitcher(cardDetails.brand)}
          style={CardListStyle.CARD_IMAGE}
        />
        <Text style={CardListStyle.CARD_ID}>
          {'ID: ' + cardDetails.customer}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const CardImageSwitcher = (cardType?: string) => {
  switch (cardType) {
    case 'MasterCard':
      return require('../../../assets/mastercard.jpeg');
    case 'Visa':
      return require('../../../assets/visacard.jpeg');
    default:
      break;
  }
};

const CardListStyle = StyleSheet.create({
  ITEM_BASE: {
    alignItems: 'center',
    marginVertical: 20,
  },
  CARD_IMAGE: {
    height: 200,
    width: 300,
  },
  CARD_ID: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
});
