import express from "express"
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());


const tweets = [{
	username: "bobesponja",
  tweet: "eu amo o hub"
}]

const usernames = [{
  username: "bobesponja",
  avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
}];


app.post("/tweets", (req, res) => {
    const novoTweet = { 
        username: req.body.username,
        tweet: req.body.tweet,
    };
    
    tweets.unshift( novoTweet);

    res.status(201).send("Criado com sucesso");
});

app.post("/sign-up", (req, res) => {
  const novoUsername = { 
      username: req.body.username,
      avatar: req.body.avatar,
  };
  usernames.push( novoUsername);

  res.status(201).send("Ok");
});


app.get("/tweets", (req,res) =>{
  /* const getAvatar = { 
    avatar: req.body.avatar,
}; */

const tweetFim = tweets.map((tweet) => {
  const getAvatar = usernames.find((object) => object.username === tweet.username).avatar
  return {
    username: tweet.username,
    avatar: getAvatar,
    tweet: tweet.tweet
  }
});

  res.status(201).send(tweetFim);
});

app.listen(5000)