import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CardListItemProps} from '../../types/cardListItemProps';
import {CardImageSwitcher} from '../dashboard/components/cardListItem';

export const CardDetailsScreen = ({route}) => {
  const [currentData, setCurrentData] = useState<CardListItemProps>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const fetchData: CardListItemProps = route?.params?.data;
    setCurrentData(fetchData);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [currentData]);

  return (
    <View style={CardDetailsStyle.BASE}>
      {isLoading ? (
        <Text style={CardDetailsStyle.TEXT_LOADING}>
          LOADING CREDIT CARD...
        </Text>
      ) : (
        <>
          <View style={CardDetailsStyle.CARD_IMAGE_BASE}>
            <Image
              source={CardImageSwitcher(currentData?.brand)}
              style={CardDetailsStyle.CARD_IMAGE}
            />
          </View>
          <ScrollView style={{marginBottom: windowHeight / 10}} bounces={false}>
            <SafeAreaView>
              <View style={CardDetailsStyle.CARD_DETAILS_BASE}>
                {currentData &&
                  Object.keys(currentData).map((item, index) => {
                    return (
                      <CardDetailsItem
                        key={index}
                        title={item}
                        data={currentData[
                          item as keyof CardListItemProps
                        ]?.toString()}
                      />
                    );
                  })}
              </View>
            </SafeAreaView>
          </ScrollView>
        </>
      )}
    </View>
  );
};

const CardDetailsItem = ({title, data}: {title: string; data: any}) => {
  return (
    <View style={CardDetailsStyle.CARD_ITEM}>
      <Text style={CardDetailsStyle.CARD_TITLE}>{titleModifier(title)}</Text>
      <Text style={CardDetailsStyle.CARD_DATA} numberOfLines={3}>
        {data ?? 'Not Available'}
      </Text>
    </View>
  );
};

/* 
    Regex Guide:
    (^|_)   beginning of the input OR "_" ($1)
    (\w)    a word character (short for [a-zA-Z0-9_]) ($2)
    g       all occurrences (global)    
*/
function titleModifier(title: string): string {
  let result;
  result = title.replace(/(^|_)(\w)/g, function ($0, $1, $2) {
    return ($1 && ' ') + $2.toUpperCase();
  });
  return result.toString();
}

const CardDetailsStyle = StyleSheet.create({
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
  CARD_IMAGE_BASE: {
    alignSelf: 'center',
    marginVertical: 30,
  },
  CARD_IMAGE: {
    height: 200,
    width: 300,
  },
  CARD_DETAILS_BASE: {
    borderWidth: 2,
    borderRadius: 30,
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 25,
    borderColor: 'yellow',
  },
  CARD_ITEM: {
    flexDirection: 'row',
    borderWidth: 0,
    justifyContent: 'space-between',
    marginVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
  },
  CARD_TITLE: {
    fontSize: 18,
    color: 'white',
  },
  CARD_DATA: {
    fontSize: 15,
    fontWeight: 'bold',
    maxWidth: 150,
    color: 'white',
  },
});
