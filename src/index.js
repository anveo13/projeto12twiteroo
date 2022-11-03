import express from "express"
const app = express();

const tweet = {
	username: "bobesponja",
  tweet: "eu amo o hub"
}

app.get("/tweets", (req,res) =>{
    res.send(tweet)
});

app.listen(5000)