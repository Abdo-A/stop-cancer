import { Card, CardItem, Text, View } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

const CardShow = ({ header, body, align }) => {
  return (
    <Card style={{ marginBottom: 20 }}>
      <CardItem
        header
        bordered
        style={{
          justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
        }}
      >
        <Text style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
          {header}
        </Text>
      </CardItem>
      <CardItem
        bordered
        style={{
          justifyContent: align === 'right' ? 'flex-end' : 'flex-start'
        }}
      >
        <Text style={{ textAlign: align === 'right' ? 'right' : 'left' }}>
          {body}
        </Text>
      </CardItem>
    </Card>
  );
};

CardShow.propTypes = {
  align: PropTypes.string, //right or left
  header: PropTypes.string,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default CardShow;
