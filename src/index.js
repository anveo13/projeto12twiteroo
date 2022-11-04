import express from "express"
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());


const tweets = [{
	username: "bobesponja",
  tweet: "eu amo o hub"
}]

const username = {
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}

app.get("/tweets", (req,res) =>{
    res.send(tweets)
});


app.post("/tweets", (req, res) => {
    const novoTweet = { 
        username: req.body.username,
        tweet: req.body.tweet,
    };
    tweets.push( novoTweet);

  res.sendStatus(201);
});


app.listen(5000)