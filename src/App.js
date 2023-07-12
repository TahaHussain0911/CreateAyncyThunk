import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import CreateForm from "./pages/CreateForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  showNotes } from "./store/slice/noteSlice";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showNotes());
  }, []);
  const { loading } = useSelector((state) => state.app);
  if (loading) {
    return (
      <>
        {" "}
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateForm />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
