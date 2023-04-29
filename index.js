const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
var cors = require('cors')
const categories = require('./data/categories.json');
const news = require('./data/news.json');


app.use(cors())
app.get('/', (req, res) => {
  res.send('home page');
})
app.get('/categories', (req, res) =>{
    res.send(categories)
})
app.get('/news/:id', (req,res) =>{
  const newsId = req.params.id;
  const newsDetails = news.find(n => n._id == newsId);
  res.send(newsDetails);
})
app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;
    if(id == 0){
      res.send(news)
    }else{
      const newsCategory = news.filter(singleNews => singleNews.category_id == id)
      res.send(newsCategory)
    }
   
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})