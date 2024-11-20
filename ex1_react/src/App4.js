import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats, nextPage, prevPage } from "./ex4/CatSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; 

const App4 = () => {
  const dispatch = useDispatch();
  const { cats, status, error, page } = useSelector((state) => state.cats);

  useEffect(() => {
    dispatch(fetchCats(page));
  }, [dispatch, page]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Lista de Cats</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <div>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cats.map((cat) => (
              <li key={cat.id} style={{ marginBottom: "20px" }}>
                <img src={cat.url} alt="cat" width="200" />
              </li>
            ))}
          </ul>
          <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
            <button
              onClick={() => dispatch(prevPage())}
              disabled={page === 1}
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid grey",
                backgroundColor: "#e8e7ec",
                padding: "5px 10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            >
              <FaArrowLeft style={{ marginRight: "5px" }} />
              Previous
            </button>
            <button
              onClick={() => dispatch(nextPage())}
              style={{
                display: "flex",
                alignItems: "center",
                border: "2px solid grey",
                backgroundColor: "#e8e7ec",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Next
              <FaArrowRight style={{ marginLeft: "5px" }} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App4;