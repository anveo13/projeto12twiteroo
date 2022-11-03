import express from "express"
const app = express();

const tweet = {
	username: "bobesponja",
  tweet: "eu amo o hub"
}

const username = {
	username: 'bobesponja', 
	avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
}

app.get("/tweets", (req,res) =>{
    res.send(tweet)
});

app.listen(5000)