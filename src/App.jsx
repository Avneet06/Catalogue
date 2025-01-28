import React, { useState, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import OurProducts from "./components/OurProducts";
import AllProducts from "./components/AllProducts";
import About from "./components/About"; // Import the About component
import ClipLoader from "react-spinners/ClipLoader"; // Example spinner
import { Box } from "@mui/system";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Show the loader while loading is true
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f9f9f9",
        }}
      >
        <ClipLoader color="#007bff" size={50} />
      </div>
    );
  }

  return (
    <div>
      <Header />

      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <>
              <OurProducts />
            </>
          }
        />

        {/* All Products Page */}
        <Route path="/all-products" element={<AllProducts />} />

        {/* About Page */}
        <Route path="/about" element={
          <>
          <Box sx={{height:'64px'}}/>
          <About />
          </>
         
        }

           />
      </Routes>
    </div>
  );
}

export default App;
