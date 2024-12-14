exports.produtos_list = async function (req, res, next) {
  const produtos = [
    {
      src: "images/notebook.avif",
      alt: "Notebook Gamer",
      card_tittle: "Notebooks",
      p: "Alta performance para jogos e produtividade.",
    },
    {
      src: "images/mouses.webp",
      alt: "Mouse Game",
      card_tittle: "Mouses",
      p: "Temos modelos para Jogos, produtividade e Ergonomia",
    },
    {
      src: "images/teclado.avif",
      alt: "Teclado Mecânico",
      card_tittle: "Teclados",
      p: "Durabilidade e conforto em cada digitação.",
    },
  ];
  res.render("main.ejs", { produtos });
};
