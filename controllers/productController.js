exports.produtos_list = async function (req, res, next) {
  const produtos = [
    {
      src: "images/notebook.avif",
      alt: "Notebook Dell g15",
      card_tittle: "Notebook Dell g15",
      p: "Placa gráfica: NVIDIA GeForce RTX 3050 6 GB GDDR6 Processador: Intel Core i5 i5-13450HX",
    },
    {
      src: "images/mouses.webp",
      alt: "Mouse Game",
      card_tittle: "Razer Vier mini",
      p: "Mouse Gamer Razer Viper Mini - 30000dpi - 49g - 8Khz",
    },
    {
      src: "images/teclado.avif",
      alt: "Teclado Mecânico",
      card_tittle: "Teclado Redragon Lakshmi",
      p: "Teclado Gamer Redragon Lakshmi, Switch Brown, Layout 60%, ABNT2, Cinza",
    },
  ];
  res.render("main.ejs", { produtos });
};
