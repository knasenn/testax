import React from 'react';
// import React, { useEffect, useState } from 'react';

const Me = () => {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('https://me-api.jsramverk.me')
  //     .then(res => res.json())
  //     .then(res => setMessage(res.description));
  // });


  var text = {
      title: 'Me',
      body: 'Hej! Jag heter Witold. Jag tror jag kör på REACT men är fortf. inte helt säker. Jag hoppas på att jag ska klara av denna kurs och att det blir kul och intressant :)'
  }

  return (
    <main>
      <h3>{text.title}</h3>
      <p>{text.body}</p>
    </main>
  );
};

export default Me;
