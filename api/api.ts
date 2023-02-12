import express, { Request, Response } from 'express';
const app = express();
const port = 8080;

interface Data {
  [key: string]: any;
}

app.get('/home', (req, res) => {
  // Récupérer données depuis back-end
  const data: Data = {}; // Récupération données depuis base de données ou stockage de cloud
  res.json({ data });
});

app.post('/register', (req, res) => {
  // Envoyer les données au back-end
  const data: Data = req.body;
  // Enregistrer les données dans la base de données ou le stockage de cloud
  res.status(201).json({ message: 'Data added successfully' });
});

app.get('/login', (req, res) => {
  // Récupérer les données depuis le back-end
  const data: Data = {}; // Récupération des données depuis la base de données ou le stockage de cloud
  res.json({ data });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
