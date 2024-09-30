import React, { useState, useEffect } from 'react';
import Header from '../../share-view/header';
import Footer from '../../share-view/footer';
import ProductsSection from '../ProductsSection';
const Productview = () => {


    return (
        <div>
            <Header />
                <ProductsSection />
            <Footer />
        </div>

    );
};

export default Productview;