import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
    <div className="container">
      <h3>info page</h3>
    </div>
    <div>
      <h3>Technologies Used</h3>
      <p> React libraries--React-color-extractor&React-color-picker, React, Redux, Redux-Saga, Node, Express, SQL, Postgresql, Heroku, CSS</p>
      <h3>Looking ahead...</h3>
      <p>I would love to continue playing with different ways of customizing the palette</p>
      <p>Work with Multer so a user can upload their own image</p>
      <h3>Thank you to the Mitchison Cohort, Dane, Kris, Liz! </h3>
    </div>
    </>
  );
}

export default InfoPage;
