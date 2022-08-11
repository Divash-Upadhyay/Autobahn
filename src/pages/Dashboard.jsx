import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchData } from "../redux/posts/action";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const post = useSelector((store) => store.Data.products);
  const loading = useSelector((store) => store.Data.loading);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData(page));
  }, [dispatch, page]);

  return (
    <Box>
      <h1 style={{ textAlign: "center" }}>Posts</h1>

      {post.map((i) => (
        <div
          style={{
            width: "900px",
            margin: "auto",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
          }}
        >
          <h1>user: {i.userId}</h1>
          <p>Title: {i.title}</p>
          <p>Post: {i.body}</p>
          <Link to={"/update/" + i.id} state={{ id: i.id }}>
            <button
              style={{
                height: "40px",
                width: "100px",
                border: "none",
                backgroundColor: "blueviolet",
                color: "wheat",
              }}
            >
              Update
            </button>
          </Link>
        </div>
      ))}
      {!loading && (
        <div style={{ width: "200px", margin: "auto" }}>
          {" "}
          <button disabled={page == 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      )}
    </Box>
  );
};
