import React from 'react';
import './About.css'; 
import Footer from './Footer';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Vino Pairings</h1>
      
      {/* Image and Attribution */}
      <div className="image-container">
        <img 
          src="chips.jpg" 
          alt="A delicious plate with chips, sausages, apples, and brown sauce" 
          className="about-image" 
        />
        <p className="image-attribution">
          Photo by <a href="https://unsplash.com/@brookelark?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Brooke Lark</a> on <a href="https://unsplash.com/photos/flat-lay-photography-of-sliced-apples-sausages-chips-and-brown-sauce-C1fMH2Vej8A?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </p>
      </div>
      
      <p>
        You probably know the golden rule of thumb about wine pairings: Red wines pair best with bold-flavored proteins (red meat) and white wines pair best with light-intensity proteins (chicken or fish). 
        Of course, there's more to making successful wine-and-food pairings. The key to finding the perfect match is to balance the flavors, textures, and aromas of both the food and the wine.
      </p>
      <p>
        Wine pairing isn't just about rules—it's about enhancing your overall dining experience. For example, a rich, full-bodied red like Cabernet Sauvignon can bring out the best in a steak, while a crisp Sauvignon Blanc might complement the subtle flavors of a seafood dish. 
        But don't forget: the most important thing is to drink what you enjoy!
      </p>
      <p>
        So go ahead, experiment, and enjoy the journey of discovering the perfect vino to go with your favorite dishes!
      </p>
      <Footer />
    </div>
    
  );
};

export default About;
