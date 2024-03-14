import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Yet another joke",
      content: "This is yet another joke",
    },
    {
      id: 4,
      title: "Also joke",
      content: "This is also a joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Starting server at post", port);
});
