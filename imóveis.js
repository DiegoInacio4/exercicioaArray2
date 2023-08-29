let imoveis = [];
let opcao = "";

do {
  opcao = prompt(
    "Quantidade de imóveis cadastrados: " +
      imoveis.length +
      "\n\n" +
      "Escolha uma opção: " +
      "\n" +
      "1. Salvar um novo imóvel: \n" +
      "2. Mostrar todos os imóveis salvos: \n" +
      "3. Sair \n"
  );
  switch (opcao) {
    case "1":
      let novoImovel = {};

      novoImovel.nome = prompt("Qual o nome do propietário? ");
      novoImovel.quartos = prompt("Qual a quantidade de quartos?");
      novoImovel.banheiros = prompt("Qual a quantidade de banheiros?");
      novoImovel.garagem = prompt("Possui garagem? (Sim/Não)");

      const confirmacao = confirm(
        "Deseja salvar este imóvel?\n" +
          "Proprietário: " +
          novoImovel.nome +
          "\n" +
          "Quantidade de quartos: " +
          novoImovel.quartos +
          "\n" +
          "Quantidade de banheiros: " +
          novoImovel.banheiros +
          "\n" +
          "Possui garagem? " +
          novoImovel.garagem +
          "\n"
      );

      if (confirmacao) {
        imoveis.push(novoImovel);
        alert("Imóvel salvo com sucesso! ");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóveis: " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].nome +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
