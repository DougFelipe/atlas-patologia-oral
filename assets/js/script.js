document.addEventListener("DOMContentLoaded", () => {
    const summaryGrid = document.getElementById("summary-grid");
  
    // Lista de temas com nomes e arquivos
    const temas = [
        { name: "Assoalho Oral", file: "Assoalho oral.jpg" },
        { name: "ATM", file: "ATM.jpg" },
        { name: "Cemento", file: "Cemento.jpg" },
        { name: "Dentina", file: "Dentina.jpg" },
        { name: "Esmalte", file: "Esmalte.jpg" },
        { name: "Gengiva", file: "Gengiva.jpg" },
        { name: "Glândula Salivar Menor", file: "Glând_Salivar_Menor.jpg" },
        { name: "Ligamento Periodontal", file: "Ligamento Periodontal.jpg" },
        { name: "Lábio", file: "Lábio.jpg" },
        { name: "Língua", file: "Língua.jpg" },
        { name: "Mucosa Jugal", file: "Mucosa Jugal.jpg" },
        { name: "Odontogênese", file: "Odontogênese.jpg" },
        { name: "Osso Alveolar", file: "Osso_Alveolar.jpg" },
        { name: "Palato", file: "Palato.jpg" },
        { name: "Polpa", file: "Polpa.jpg" }
      ];
      
  
    // Gera cada item do sumário
    temas.forEach(tema => {
      const item = document.createElement("div");
      item.classList.add("summary-item");
  
      // Cria a imagem
      const img = document.createElement("img");
      img.src = `assets/images/temas/${tema.file}`;
      img.alt = tema.name;
  
      // Cria o título
      const title = document.createElement("h3");
      title.textContent = tema.name;
  
      // Adiciona uma descrição fictícia
      const description = document.createElement("p");
      description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  
      // Monta o item e adiciona ao container
      item.appendChild(img);
      item.appendChild(title);
      item.appendChild(description);
      summaryGrid.appendChild(item);
    });
  });
  