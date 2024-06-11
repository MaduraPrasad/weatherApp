import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHigh, faWind, faTint, faCloud, faSun, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'; // Import relevant Font Awesome icons

const WeatherCard = ({ title, value, description }) => {
  // Define the appropriate icon for each weather description
  const getIcon = (description) => {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return <FontAwesomeIcon icon={faSun} />;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return <FontAwesomeIcon icon={faCloud} />;
      case 'shower rain':
      case 'rain':
        return <FontAwesomeIcon icon={faCloudRain} />;
      case 'snow':
        return <FontAwesomeIcon icon={faSnowflake} />;
      default:
        return null;
    }
  };

  return (
    <Card style={{ marginTop: '10px' }}>
      <CardContent>
        <Typography variant="h5" component="h2" display="inline">
          {getIcon(description)} {title}: 
        </Typography>{" "}
        <Typography variant="body1" display="inline">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
