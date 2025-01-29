document.addEventListener("DOMContentLoaded", () => {
  const summaryGrid = document.getElementById("summary-grid");

  // Lista de temas com nomes e arquivos
  const temas = [
    { name: "Lábio", file: "Lábio.jpg" },
    { name: "Língua", file: "Língua.jpg" },
    { name: "Mucosa Jugal", file: "Mucosa Jugal.jpg" },
    { name: "Palato", file: "Palato.jpg" },
    { name: "Assoalho Oral", file: "Assoalho oral.jpg" },
    { name: "Glândulas Salivares", file: "Glând_Salivar_Menor.jpg" },
    { name: "Articulação Temporomandibular (ATM)", file: "ATM.jpg" },
    { name: "Odontogênese", file: "Odontogênese.jpg" },
    { name: "Esmalte", file: "Esmalte.jpg" },
    { name: "Dentina", file: "Dentina.jpg" },
    { name: "Polpa", file: "Polpa.jpg" },
    { name: "Cemento", file: "Cemento.jpg" },
    { name: "Ligamento Periodontal", file: "Ligamento Periodontal.jpg" },
    { name: "Osso Alveolar / Processo Alveolar", file: "Osso_Alveolar.jpg" },
    { name: "Gengiva", file: "Gengiva.jpg" }
  ];

  // Gera cada item do sumário
  temas.forEach((tema, index) => {
    const item = document.createElement("div");
    item.classList.add("summary-item");

    // Cria a imagem
    const img = document.createElement("img");
    img.src = `assets/images/temas/${tema.file}`;
    img.alt = tema.name;

    // Cria o link do título com o parâmetro de URL
    const link = document.createElement("a");
    link.href = `tema.html?tema=${encodeURIComponent(tema.name)}`; // Passa o nome do tema como parâmetro
    link.textContent = tema.name;

    // Adiciona elementos ao item
    const title = document.createElement("h3");
    title.appendChild(link);

    item.appendChild(img);
    item.appendChild(title);
    summaryGrid.appendChild(item);
  });
});
