import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAddHere } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
// material
// 🚀 Fast
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const dispatch = useDispatch();
  const formSubmit = () => {
    if (title && content) {
      dispatch(
        postAddHere({
          id: nanoid,
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <div style={{ width: "20%" }}>
      <h2>Add New Post</h2>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <TextField style={{marginBottom:'15px'}}
          label="postTitle"
          variant="standard"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />

        <TextField  style={{marginBottom:'15px'}}
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
          label="postContent"
          multiline
          variant="standard"
          
        />
        <Stack>
        <Button style={{marginTop:'15px'}} variant="contained" color="error" onClick={formSubmit}>
          Submit{" "}
        </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default AddPostForm;
