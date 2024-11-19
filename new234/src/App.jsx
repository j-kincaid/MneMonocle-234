import { useState } from 'react'
import './App.css'
// PRODUCT IMAGE COMPONENT
function ProductImage() {
  const productImage = "https://i.imgur.com/kzefm0d.jpg";
  const productImage1 = "https://i.imgur.com/hQyPQg6.png[/img]";
  const headline = 'MneMonocle.'
  const subheading = 'Breakthrough Design for Aging in Place.'
  return (
      <>
        <h1>{headline}</h1>
        <h2>{subheading}</h2>
        <h3>On sale through 2024</h3>
        <img
          className='glasses'
          src={productImage}  
          /> 
        <img
          className='glasses'
          src={productImage1} 
          /> 
      </>
    );
}
// END OF PRODUCT IMAGE COMPONENT

// PRODUCT BUTTONS COMPONENT

function Counter() {
  const [index, setIndex] = useState(0);
  // We want State to remember index and setIndex.

  function handleIncrement() {
    setIndex(index + 1);
  }
//           function handleDecrement()
  function handleDecrement() {
      if (index > 0)
      setIndex(index - 1);
  }
//           function reset()
function handleReset() {
  setIndex(0);
}
return (
  <>
  <section>
      <h3>Order Total: ${index * 300}</h3>
        <button onClick={handleIncrement}>
        Peach
        </button>
        <button onClick={handleIncrement}>
        Red
        </button>
        <button onClick={handleIncrement}>
        Green
        </button>
        <button onClick={handleIncrement}>
        Silver
        </button>
        <button onClick={handleIncrement}>
        Black
        </button>

        <button onClick={handleDecrement}>
        Remove
        </button>
        <button onClick={handleReset}>
        Reset
        </button>
    </section>
    </>
  );
}
// END OF PRODUCT BUTTONS COMPONENT



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
  const title1 = 'The Influences Informing the Evolution of the MneMonocle'
  return (
    <>
    <h2>{title1}</h2>
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

  return (
    <div style={visorAR.theme}>
      <h2>{visorAR.name} features were introduced over time.</h2>
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
    <ProductImage />
    <Counter />
      <BracesInHTML />
      <Visor />
      <BracesInAttributes />
      <CombinedExpressions />
      <InlineStyles />
      <visorAR />
    </>
  )
}