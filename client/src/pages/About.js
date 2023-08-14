import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Khush ChromaCloth"}>
      <div className="row contactus dashboard ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          <h1>Welcome to Khush ChromaCloth!</h1>

          At ChromaCloth, we are passionate about fashion and believe that 
          clothes are more than just garments; they are a reflection of your unique personality 
          and style. Our mission is to provide you with a diverse range of high-quality, trendy, 
          and affordable clothing that empowers you to express yourself confidently.
          
          <h5>Why Choose Us?</h5>

          Fashion-forward Selection: We curate the latest fashion trends from around the world to keep 
          your wardrobe up-to-date with the hottest styles. Whether you're looking for casual everyday wear, 
          chic work attire, or glamorous evening outfits, we have something to suit every occasion and taste.

          </p>
        </div>
      </div>
    </Layout>
    
  );
};

export default About;