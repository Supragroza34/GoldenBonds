import express from "express";

const port = 3000;
const app = express();

app.get("/", (req,res) =>{
    res.render("index.ejs");
});


app.get("/login", (req,res) =>{
    res.render("login.ejs");
});

app.get("/signup", (req,res) =>{
    res.render("signup.ejs");
})

app.post("/submit", (req,res) =>{
    res.render("index.ejs");
})


app.listen(port, () =>{
    console.log("Listening on port 3000");
})