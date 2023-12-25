import React, { useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import Header from "./components/Header";
import Record from "./components/Record";
import RecordTable from "./components/RecordTable";
import Footer from "./components/footer";
import ProductDrawer from "./components/ProductDrawer";

const App = () => {
  return (
    <div className="max-w-[700px] mx-auto px-5 lg:px-0 min-h-screen flex flex-col ">
      <Header />
      <CheckoutForm />
      <RecordTable />
      <Footer />
      <ProductDrawer />
    </div>
  );
};

export default App;
