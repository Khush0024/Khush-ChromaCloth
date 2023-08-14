import React from 'react'
import Header from './Header'
import Footer from './Footer';
import {Helmet} from "react-helmet";
import {Toaster} from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
        <Helmet>
            <meta charSet='utf-8'/>
            <title>{title}</title>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
            <meta name="author" content={author}/>
        </Helmet>
        <Header />
        <main style={{ minHeight:"70vh" }}>
        <Toaster />
        {children}
        </main>    
      
        <Footer />
    </div>
  );
};

Layout.defaultProps = {
    title: 'Khush ChromaCloth',
    description: 'Mern Project',
    keywords: 'Mern, React, MongoDB, Node',
    author: 'Khushpal Singh',
};

export default Layout;