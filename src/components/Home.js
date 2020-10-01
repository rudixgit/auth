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
        'eyJraWQiOiJiZGRadUdBZE1QREl0RlwvRk9JTmlOdG9SQ3Z1R1Y3WitBYURkSjh2RDJ5cz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI3ODk0YTc3Ny04NDBmLTQxNDAtODRkOS1lMDIxNGYwNDU3NzAiLCJldmVudF9pZCI6IjhmNzI1MTM1LWEyNDEtNGQ3Yy1iMmQ2LTJhYmE1MzBjNDVlYiIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDE1MzEzNzEsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX3NrNUxmbVU0ZyIsImV4cCI6MTYwMTUzNDk3MSwiaWF0IjoxNjAxNTMxMzcxLCJqdGkiOiJhMzU2YzgxOC1iOWQ4LTQ3ZDItOTFmYy0xMTMwOWYwYmE3M2YiLCJjbGllbnRfaWQiOiI2ZDVvZjYya3U5ZzRwY2wyanBwMHJjbmc2NyIsInVzZXJuYW1lIjoiYXJwZWNvcCJ9.IR_ULdj3vPK6t_Qpe2TAK5afteN_-Zub4iwfXTRe_OulaueW5cRYZoM6L98YMOQycHcwGyfa8UDxU1v9xB7F1RJ4TaKW1K_Pj50JyXjsG7sYtTxYemkUTpi86zIqPB79N8O4F4sdL3Y75MtKhdnH_os0O4U_Lq_0pZiwjDMtsSqSmHeNUfmSK790c2EZEGoWgyDal3pxvCD_qeP5nheseDbA3a__YYrXQHGNgL3AsTK6V_j1ccmbFDUIlFsdiXG8F5gGRBChgAGoGL6M2W9augmldQDMR9MRJBEeagnjB_TCzUSi9UbNG9WPvfLGJdorlTywmbNryLvh2l4Nz40stw',
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
