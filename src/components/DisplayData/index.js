import React, { useEffect } from "react";
import classes from "./DisplayData.module.css";
import { useSelector } from "react-redux";
const DisplayData = () => {
  const { notes, loading } = useSelector((state) => state.app);
  return (
    <>
        {loading ? (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          notes?.map((note) => (
            <div className={classes.notesContainer}>
              <h2>{note.name}</h2>
              <h5>{note.title}</h5>
              <p>{note.description}</p>
            </div>
          ))
        )}
    </>
  );
};

export default DisplayData;
