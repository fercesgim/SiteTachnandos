exports.produtos_list = async function (req, res, next) {
  const produtos = [
    {
      src: "images/notebook.avif",
      alt: "Notebook Dell g15",
      card_tittle: "Notebook Dell g15",
      p: "  Placa gráfica: NVIDIA GeForce RTX 3050 6 GB GDDR6 Processador: Intel Core i5 i5-13450HX",
    },
    {
      src: "images/mouses.webp",
      alt: "Mouse Game",
      card_tittle: "Mouse Razer Vier mini ",
      p: "Mouse Gamer Razer Viper Mini - 30000dpi - 49g - 8Khz",
    },
    
    {
      src: "images/teclado.avif",
      alt: "Teclado Mecânico",
      card_tittle: "Teclado Redragon Lakshmi",
      p: "Teclado Gamer Redragon Lakshmi, Switch Brown, Layout 60%, ABNT2, Cinza",
    },
    {
      src: "images/Desktop.png",
      alt: "PC Gamer Poseídon",
      card_tittle: "PC gamer Poseídon ",
      p: "PC Gamer Poseídon, AMD Ryzen 7 5700X3D, GeForce RTX 4060 8GB, 16GB DDR4, SSD M.2 480GB",
    },
    {
      src: "images/placadevideo.png",
      alt: "Placa de Vídeo RTX 4090",
      card_tittle: "Placa de Vídeo RTX 4090",
      p: "NVIDIA® GeForce RTX™ 4090, 16384 cores, 24GB GDDR6X",
    },
    {
      src: "images/monitor.avif",
      alt: "Monitor Gamer Alienware",
      card_tittle: "Monitor Gamer Alienware",
      p: "Monitor Gamer Alienware Curvo QD-OLED de 34” - AW3423DW",
    }
  ];
  res.render("main.ejs", { produtos });
};
