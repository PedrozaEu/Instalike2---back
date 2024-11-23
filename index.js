import express from 'express'

let postId=1;

const posts = [
  {
    id:postId++,
    descricao:"uma descricao qualquer", 
    imagem:"https://placecats.com/millie/300/150",
  },
  {
    id:postId++,
    descricao:"outra descricao", 
    imagem:"https://placecats.com/millie/300/150"
  },
  {
    id:postId++,
    descricao:"outra descricao", 
    imagem:"https://placecats.com/millie/300/150"
  },
  {
    id:postId++,
    descricao:"outra descricao", 
    imagem:"https://placecats.com/millie/300/150"
  }
];
const app = express()
app.use(express.json());
app.listen(3000, () =>{
  console.log('Servidor escutando...');
});

function buscarPostPorID(id) {
  return posts.findIndex((post)=>{
    return post.id === Number(id)
  });
};

app.get('/posts', (req, res) => {
  res.status(200).json(posts);
})

app.get('/posts/:id', (req, res) => {
  const index = buscarPostPorID(req.params.id);
  if (index !== -1) {
    res.status(200).json(posts[index]);
  } else {
    res.status(404).json({ message: 'Post não encontrado' });
  }
});
//commit não subiu ver o que houve