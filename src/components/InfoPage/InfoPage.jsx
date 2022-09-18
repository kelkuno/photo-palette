import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <>
    
    <div className="container">
      <h2>Technologies Used:</h2>
      <ul>
        <li>React libraries (<i>React-color-extractor</i> & <i>React-color-picker</i>)</li>
        <li>React</li>
        <li>Redux</li>
        <li>Redux-Saga</li>
        <li>Node</li>
        <li>Express</li>
        <li>SQL</li>
        <li>Postgresql</li>
        <li>Heroku</li>
        <li>CSS</li>
      </ul>
     
      <h2>Looking ahead...</h2>
      <ol>
        <li>Further palette customization</li>
        <li>Use Multer API to allow users to upload their personal images</li>
      </ol>
    
      <h1>Thank you to the Mitchison Cohort, Dane, Kris, Liz! </h1>
    </div>
    </>
  );
}

export default InfoPage;
