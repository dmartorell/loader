import { useEffect, useState } from 'react';
import Loader from './loader';
import axios from 'axios';


const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        setData(data);
      } catch (err) {
        setError(`problem: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    error ? <div className="App">{error}</div> :
    loading ? <div className="App">
    <Loader></Loader>
  </div>
  : 
  <div>
      {
        data.map(item => 
        <img key={item.title} src={item.thumbnailUrl} alt={item.title} />
          )
      }
    </div>
  )
}

export default App;

