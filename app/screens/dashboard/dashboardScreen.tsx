import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, Dimensions} from 'react-native';
import {CreditCardApi} from '../../services/credit-card.api';
import {CardListItemProps} from '../../types/cardListItemProps';
import {CardListItem} from './components/cardListItem';

export const DashboardScreen = () => {
  const [cardData, setCardData] = useState<CardListItemProps[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const creditCardApi = new CreditCardApi();
    setIsLoading(true);
    await creditCardApi.getAllCreditCards().then((res: CardListItemProps[]) => {
      console.log(res);
      setCardData(res);
      setIsLoading(false);
    });
  };

  return (
    <View style={DashboardStyle.BASE}>
      {isLoading ? (
        <Text style={DashboardStyle.TEXT_LOADING}>LOADING CREDIT CARD...</Text>
      ) : (
        <View style={DashboardStyle.CONTAINER}>
          <Text style={DashboardStyle.INFO_TEXT}>
            Info: Click on any credit card to view details
          </Text>
          {cardData ? (
            <FlatList
              data={cardData}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => (
                <CardListItem cardDetails={item} />
              )}
            />
          ) : (
            <Text style={DashboardStyle.TEXT_LOADING}>
              Sorry, No Card Found
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

const DashboardStyle = StyleSheet.create({
  BASE: {
    backgroundColor: '#2B339B',
    height: Dimensions.get('window').height,
  },
  TEXT_LOADING: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
    marginTop: Dimensions.get('window').height / 2,
  },
  CONTAINER: {
    alignSelf: 'center',
    marginBottom: 50,
    marginTop: 20,
  },
  INFO_TEXT: {
    color: 'white',
    fontSize: 14,
  },
});
