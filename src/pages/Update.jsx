import { Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

export const Update = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const [data, setData] = useState({
    userId: "",
    body: "",
    title: "",
  });

  const location = useLocation();
  const id = location.state.id;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
      data: data,
    })
      .then((res) => {
        alert("Updated Successfully");
      })
      .catch((err) => {
        alert("Error");
      });
  };

  console.log(data);
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align="center">
          <h2>Update a post</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            name="userId"
            value={data.userId}
            onChange={handleChange}
            fullWidth
            label="Id"
            placeholder="enter userId"
          ></TextField>

          <TextField
            name="title"
            value={data.title}
            onChange={handleChange}
            fullWidth
            margin="dense"
            label="Title"
          ></TextField>

          <TextField
            name="body"
            value={data.body}
            onChange={handleChange}
            fullWidth
            label="body"
            margin="body"
          ></TextField>

          <Button
            type="submit"
            margin="dense"
            variant="contained"
            color="primary"
          >
            Update
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
