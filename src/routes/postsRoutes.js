import express from 'express';

const routes = (app) => {
    app.use(express.json());//Permite que os servidor interprete requisições com corpo no formato Json  
    
    // Define a rota para buscar um post por ID
    app.get("/posts/:id", async(req, res) => {
    const index = await buscarPostPorID(req.params.id); // Busca o índice do post com o ID especificado na URL
    if (index !== -1) {
      res.status(200).json(posts[index]); // Retorna o post encontrado
    } else {
      res.status(404).json({ message: "Post não encontrado" }); // Retorna um erro 404 se o post não for encontrado
    }
  });
}

export default routes;
