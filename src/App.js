import React from 'react';

function Food({ fav }) {
  return <h3>I like {fav}</h3>;
}

function App() {
  return (
    <div>
      <h1>Hello!!</h1>
      <Food favorite="kimchi" />
      <Food favorite="ramen" />
      <Food favorite="samgyeopsal" />
      <Food favorite="chukumi" />
      <Food favorite="김치" />
    </div>
  );
}

export default App;
