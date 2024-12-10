const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const port = process.env.port || 5000;

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Set CORS headers as a middleware function
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// @desc: creating an API endpoint to GET request, ADMIN && STUDENTS

// GET API end point

app.get("/api/request", (req, res) => {
  fs.readFile("./data/request.json", "utf8", (err, data) => {
    // log the error message if any
    if (err) {
      console.log(err);
      res.status(500).send("Error loading data files");
    }
    // if !error
    else {
      res.json(JSON.parse(data));
    }
  });
});
// @desc: creating an API endpoint to POST request, ADMIN && STUDENTS

// POST API end point
app.post("/api/request", (req, res) => {
  res.json(req.body); // Return the form data back to the client as response

  // Append the form data to the user.json file
  fs.readFile("./data/request.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data); // Parse the string into a JSON object
      jsonData.push(req.body);
      // write the existing user file
      fs.writeFile(
        "./data/request.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
});

// Create an API endpoint to handle GET requests to Admin

app.get("/api/admincredentials", (req, res) => {
  fs.readFile("./data/admin.json", "utf8", (err, data) => {
    // log the error message if any
    if (err) {
      console.log(err);
      res.status(500).send("Error loading data files");
    }
    // if !error
    else {
      res.json(JSON.parse(data));
    }
  });
});

// @desc: there is no need to post to Admin, admin users will be added manually by admins

// @desc: student dont have access until admins add and give access
// Create an API endpoint to handle GET requests to students login form

app.get("/api/usercredentials", (req, res) => {
  fs.readFile("./data/students.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading file data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// @desc: Create an API endpoint to handle POST request to add student credentials

app.post("/api/usercredentials", (req, res) => {
  res.json(req.body); // Return the form data back to the client as response

  // Append the form data to the user.json file
  fs.readFile("./data/students.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data); // Parse the string into a JSON object
      jsonData.push(req.body);
      // write the existing user file
      fs.writeFile(
        "./data/students.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
});

// @desc: endpoint to get a book from frontend: for both user & admin
// Create an API endpoint to handle GET requests to books

app.get("/api/libBooks", (req, res) => {
  fs.readFile("./data/books.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error reading file data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// @desc: endpoint to add a book from the frontend: strictly for Admin only
// creating API endpoint to handle POST request to book

app.post("/api/libBooks", (req, res) => {
  res.json(req.body); // Return the form data back to the client as response

  // Append the form data to the user.json file
  fs.readFile("./data/books.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data); // Parse the string into a JSON object
      jsonData.push(req.body);
      // write the existing user file
      fs.writeFile(
        "./data/books.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
});

//@desc: creating an API endpoint for the GET request to the students lends details: Strictly for admins

app.get("/api/lends", (req, res) => {
  fs.readFile("./data/lends.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

//@desc: Creating endpoint the PORT request for adding students lend details: Strictly for admins

app.post("/api/lends", (req, res) => {
  res.json(req.body);
  fs.readFile("./data/lends.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);
      fs.writeFile(
        "./data/lends.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
});

//@desc: creating the GET API endpoint for the ebook files

app.get("/api/ebooks", (req, res) => {
  fs.readFile("./uploads/ebooks.json", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Internal server error, failed to load data files");
    } else {
      res.json(JSON.parse(data));
    }
  });
});
//@desc: creating the post API endpoint for the ebook files, fundamentally restricted to only admins

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  const fileDetails = {
    id: req.body.id,
    bookName: req.body.bookName,
    pages: req.body.pages,
    fileName: req.file.filename,
  };

  fs.readFile("./uploads/ebooks.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(fileDetails);
      fs.writeFile(
        "./uploads/ebooks.json",
        JSON.stringify(jsonData, null, 2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });

  res.json(fileDetails);
});

//@desc: creating an API endpoint to download ebooks: restricted to only students
app.get("/api/download/:fileName", (req, res) => {
  const fileName = req.params.fileName;
  const filePath = path.join(__dirname, "uploads", fileName);

  fs.exists(filePath, (exists) => {
    if (exists) {
      res.download(filePath);
    } else {
      res.status(404).send("File not found!");
    }
  });
});

app.post("/api/make", (req, res) => {
  res.json(req.body);
  fs.readFile("./user.json", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonData = JSON.parse(data);
      jsonData.push(req.body);
      fs.writeFile("./user.json", JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
