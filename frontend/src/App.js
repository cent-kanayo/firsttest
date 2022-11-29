import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/');
        console.log(data);
        setMessage(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    };
    fetchMessage();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Oops! Something went wrong, please try again</h1>;
  return (
    <div>
      <header className="padding">
        <h1>DevOps</h1>
      </header>
      <div className="grid">
        <h3>The text below is coming from the backend</h3>
        <h1>{message.message}</h1>
      </div>
    </div>
  );
}

export default App;
