import React from 'react';
import './About.css'; // Assuming you will create a corresponding CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Wine Pairings</h1>
      <p>
        You probably know the golden rule of thumb about wine pairings: Red wines pair best with bold-flavored proteins (red meat) and white wines pair best with light-intensity proteins (chicken or fish). 
        Of course, there's more to making successful wine-and-food pairings. The key to finding the perfect match is to balance the flavors, textures, and aromas of both the food and the wine.
      </p>
      <p>
        Wine pairing isn't just about rules—it's about enhancing your overall dining experience. For example, a rich, full-bodied red like Cabernet Sauvignon can bring out the best in a steak, while a crisp Sauvignon Blanc might complement the subtle flavors of a seafood dish. 
        But don't forget: the most important thing is to drink what you enjoy!
      </p>
      <p>
        So go ahead, experiment, and enjoy the journey of discovering the perfect wine to go with your favorite dishes!
      </p>
    </div>
  );
};

export default About;
