import { Button, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

export const Post = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const [data, setData] = useState({
    userId: "",
    body: "",
    title: "",
  });
  console.log(data);
  const handleChange = (e) => {
    // e.preventDefault;
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      data: data,
    })
      .then((res) => {
        alert("Successfully posted");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>create a new post</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            name="userId"
            value={data.userId}
            onChange={handleChange}
            fullWidth
            label="userId"
            placeholder="enter user id"
          ></TextField>

          <TextField
            name="title"
            value={data.title}
            onChange={handleChange}
            fullWidth
            margin="dense"
            label="Title"
            placeholder="enter title"
          ></TextField>

          <TextField
            name="body"
            value={data.body}
            onChange={handleChange}
            fullWidth
            label="Body"
            margin="dense"
            placeholder="enter body"
          ></TextField>

          <Button
            type="submit"
            margin="dense"
            variant="contained"
            color="primary"
          >
            Post
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
