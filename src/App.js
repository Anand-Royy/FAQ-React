import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>quesions and answers about login</h3>
        <section className='info'>
          {data.map((ques) => {
            return <SingleQuestion key={ques.id} {...ques}></SingleQuestion>;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
