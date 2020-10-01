import React, { useEffect, useState } from 'react';
import { query } from '../utils/api';

const Home = ({ user }) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(() => {
    async function fetchData() {
      const response = await query(
        '/',
        'eyJraWQiOiJVMHBtT1FjTGNpWVB3N2Fwd0ZMNVQ4c1llOXh6VHhkSEtmOE1VT3FXcTBnPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MmVhNWQxNi1lMzA3LTQzZWItYmVhMC1hYTg0ZGY1MzJjZmUiLCJldmVudF9pZCI6IjY1NzA1NzRkLTJmNzAtNDFiNy1iYmY0LTA2MjY0YWJiMjQ2ZCIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MDE1MzIzNjQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX1Q2djA1dGp6aCIsImV4cCI6MTYwMTUzOTk4MiwiaWF0IjoxNjAxNTM2MzgyLCJqdGkiOiJkYThkMmI5NS1jOGJmLTRiNWUtYWEzOS0zZmQ1OGJmMjlkNWYiLCJjbGllbnRfaWQiOiJlcWxyZXRuc2V0a2o1cDU3YnF0YW5kanFhIiwidXNlcm5hbWUiOiJhcnBlY29wIn0.LMX3fIXkc-Q04RhVM8mbrPFQm2dsxlrc4AcRBMultEmcQdTPeJ20fu3XJWcHgBpjZAA2zh5aamZYaSMcgPEt2OkxojVsZj6ZzsPJqrcfh-1JhwGUTvg-k6qd4OYgJMv-7A64Cl7PmiAHQAtPjJBXwXNnYGOXADRmRjephojUwU_dwMpWlCnuV0y-GlzpC-T7f5m75PeeMJ56vI0mR94UUpuiVuLvqjFCGyAHtCWo9l11tQJ35d6TIpm9KeNewHWND_zCsiiZxfd0tkBPW6xTeDCkfKXPzhE_TfkukP0Mz3NieXuDimdbt7jRKPHxZRHYJUb9M0PrxqLeOcS5uiA4xg',
      );

      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Начало</h1>
      {JSON.stringify(user)}
      <hr />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
