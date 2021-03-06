import { Card, CardItem, Text, List, ListItem, Right } from 'native-base';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const ContentCard = ({
  header,
  body,
  align,
  imageURL,
  marginBottom,
  resizeMode,
  height,
  date
}) => {
  return (
    <Card
      style={{
        marginBottom: !isNaN(marginBottom) ? marginBottom : 100
      }}
    >
      {header ? (
        <CardItem
          header
          bordered
          style={{
            justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
          }}
        >
          <Text
            style={{
              textAlign: align === 'right' ? 'right' : 'left',
              fontSize: 25
            }}
          >
            {header}
          </Text>
        </CardItem>
      ) : null}

      {imageURL ? (
        <CardItem cardBody>
          <Image
            resizeMode={resizeMode ? resizeMode : 'stretch'}
            source={imageURL}
            style={{ height: height ? height : 200, width: null, flex: 1 }}
          />
        </CardItem>
      ) : null}

      {body ? (
        <CardItem
          bordered
          style={{
            justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
          }}
        >
          {typeof body === 'string' ? (
            <Text
              style={{
                textAlign: align === 'right' ? 'right' : 'left',
                fontSize: 18
              }}
            >
              {body}
            </Text>
          ) : (
            <List>
              {body.map((item) => (
                <ListItem
                  style={{
                    justifyContent:
                      align === 'right' ? 'flex-end' : 'flex-start'
                  }}
                  key={item}
                >
                  <Text
                    style={{
                      textAlign: align === 'right' ? 'right' : 'left',
                      fontSize: 18
                    }}
                  >
                    {item}
                  </Text>
                </ListItem>
              ))}
            </List>
          )}
        </CardItem>
      ) : null}
      {date && (
        <CardItem style={{ justifyContent: 'flex-end' }}>
          <Text>{date}</Text>
        </CardItem>
      )}
    </Card>
  );
};

ContentCard.propTypes = {
  align: PropTypes.string, //right or left
  header: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default ContentCard;
