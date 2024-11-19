import { Component, useState } from 'react'
import './App.css'


// GALLERY COMPONENT

function Visor() {
  return (
    <img 
    className="foil" 
        src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Wearing_AR_Glasses.jpg" 
        alt="Man wearing a Meta 2 augmented reality headset. Image credit: Maxibu" 
    />
  );
}

// Using curly braces for attributes
// I put styles in App.css

function BracesInAttributes() {
  const image = 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Cool_old_eye_glasses_in_New_Orleans.jpg';
  const description = 'Old glasses in NewOrleans, Image credit: Quinn Dombrowski';
  return (
    <img
      className="glasses"
      src={image}
      alt={description}
    />
  );
}

// Using curly braces inside an HTML tag
function BracesInHTML() {
  const title1 = 'A gallery of images from the History of the MneMonocle'
  return (
    <>
    <h1>{title1}.</h1>
    </>
  );
}
// Using curly braces for in-line CSS
function InlineStyles() {
  return (
		<div style = {
      {
      backgroundColor: '#029895',
			color: '#fff',
      fontSize: '1.5rem',
      margin: '5%',
      padding: '0.25rem'
      }
    }
    >
  </div>
  )
}

// Using curly braces for an object with both a name and a theme
const visorAR = {
  name: 'Augmentation',
  theme: {
    backgroundColor: '#029895',
    color: 'white',
    textAlign: 'center',
  }
};

function CombinedExpressions() {
  const human="https://upload.wikimedia.org/wikipedia/commons/7/7b/Samsung_3D_glasses.jpg"
  const description = "Early visor, image credit: Jiří Sedláček"
      // src=
    // alt="
  return (
    <div style={visorAR.theme}>
      <h2>{visorAR.name} features are slowly introduced.</h2>
    <img 
    className="glasses"
    src={human}
    alt={description}
    />
    <img 
    className="visor" 
    src="https://upload.wikimedia.org/wikipedia/commons/0/09/Magic_Leap_No_-_1.jpg"
    alt="Augmented reality Magic Leap device, Image credit: KKPCW"
    />
    </div>
  )
}
// END OF GALLERY COMPONENT



export default function App() {
  return (
    <>
      <BracesInHTML />
      <Visor />
      <BracesInAttributes />
      <CombinedExpressions />
      <InlineStyles />
      <visorAR />
{/* end of gallery */}

    </>
  )
}