import React from "react";
import Header from "../common/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import Home from "../home/Home";
import About from "../about/About";
import Contact from "../contact/Contact";
import Register from "../blog/Register";
import Footer from "../common/footer/Footer";
import ProductList from "../services/ProductList";
import ProductDetail from "../services/ProductDetail";
import SellerForm from "../services/SellerForm";
import Orders from "../order/Orders";
import OrdersList from "../order/orders_history";

const Pages = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Register />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product-list" element={<ProductList />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/sell" element={<SellerForm />} />
                    <Route path="/orders" element={<OrdersList />} />
                    <Route path="/order" element={<Orders />} />{" "}
                </Routes>
                <Footer />
            </Router>
        </>
    );
};

export default Pages;

