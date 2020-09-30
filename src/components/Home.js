import React, { useEffect, useState } from 'react';
import { query } from '../utils/api';

const Home = ({ user }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await query(
        {
          collection: 'newsbg',
          limit: 1,
          descending: false,
          fields: ['title', 'image', 'vreme'],
        },
        'eyJraWQiOiJiZGRadUdBZE1QREl0RlwvRk9JTmlOdG9SQ3Z1R1Y3WitBYURkSjh2RDJ5cz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ODk0YTc3Ny04NDBmLTQxNDAtODRkOS1lMDIxNGYwNDU3NzAiLCJldmVudF9pZCI6IjM1ZGNkYzZjLTRiZTktNDcyZi04ZTVhLTRmYjM1YzVlZjY1MSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDE0NzQ3MjUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NrNUxmbVU0ZyIsImV4cCI6MTYwMTQ3ODMyNSwiaWF0IjoxNjAxNDc0NzI1LCJqdGkiOiIzMGRhODFhOS04M2YyLTRhMDMtOTMzZi1hYTJiOGNhMGIzYWQiLCJjbGllbnRfaWQiOiI2ZDVvZjYya3U5ZzRwY2wyanBwMHJjbmc2NyIsInVzZXJuYW1lIjoiYXJwZWNvcCJ9.RoQxpZdAQJZnb9z5S-M-PhW5-xwayRTYJwC8Vk5GueaewbnqocVNb7gp-DpbdGrBz77nM3G56YSICFK6FxXoZf8ncxHG7qCL8bJmdS88jMbtfHj2WA4EaFdpBUuxIlN3IpCPkE04F0yJFrg0MeGMs9ykWM5-ByJn_WSWuCql1lzR_XVSrrZxSAy4xA23ntoE7h0Yc3Gn4x55qbfIJlzxvwKt_6HIgiU2-kjpgWQ5nb_NmhSaaN4RqvZor2Wl0a3ysONDw-TS0GGN7p3y-Vhzjj2wCXBdfLJ0WI7OflRg6WjNT2Rq3tzD9uVkCPX5VoQUvIWW1CBGt83s5lcVAS3cEQ',
      );

      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Начало</h1>

      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
