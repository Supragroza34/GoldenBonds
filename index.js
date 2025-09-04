import express from "express";
import bodyParser from "body-parser";

const port = 3000;
const app = express();

let users = [];
let expenses = [];

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) =>{
    res.render("index", {expenses});
});


app.get("/login", (req,res) =>{
    res.render("login.ejs");
});

app.get("/signup", (req,res) =>{
    res.render("signup.ejs");
});

app.post("/submit", (req,res) =>{
    res.render("index.ejs");
});

app.get("/main", (req,res) =>{
    res.render("main.ejs");
});

app.post("/expenses", (req, res) => {
  const { description, amount, paidBy, splitAmong } = req.body;
  const expense = {
    description,
    amount: Number(amount),
    paidBy: Number(paidBy),
    splitAmong: splitAmong.split(",").map(Number)
  };
  expenses.push(expense);
  res.redirect("/");
});

app.listen(port, () =>{
    console.log("Listening on port 3000");
});