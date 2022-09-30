const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

const posts = require("./routes/api/posts");
app.use("/api/posts", posts);

const files = (req, file, cb) => {
  const fileTypes = ["image/jpeg", "image/jpg"];
  if (!fileTypes.includes(file.minetype)) {
    const error = new Error("Upload JPG Or JPEG");
    error.code = "INCORRECT_FILETYPE";
    return cb(error, false);
  }
  cb(null, true);
};

const upload = multer({
  dest: "./uploads",
  files,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ file: req.file });
});

app.use((err, req, res, next) => {
  if (err.code == "INCORRECT_FILETYPE") {
    res.status(422).json({ error: "Only Images are allowed" });
    return;
  }
  if (err.code == "LIMIT_FILE_SIZE") {
    res.status(422).json({ error: "allowed file size is 2MB" });
    return;
  }
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server : ${port}`);
});
