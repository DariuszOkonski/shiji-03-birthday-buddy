import { useState } from 'react';
import data from './data';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthday today</h3>

        <List people={people} />

        {people.length > 0 && (
          <button
            type='button'
            className='btn btn-block'
            onClick={() => setPeople([])}
          >
            clear all
          </button>
        )}
        {people.length === 0 && (
          <button
            type='button'
            className='btn btn-block'
            onClick={() => setPeople(data)}
          >
            Get people
          </button>
        )}
      </section>
    </main>
  );
};
export default App;
