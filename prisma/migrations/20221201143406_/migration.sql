-- CreateTable
CREATE TABLE "CardID" (
    "cardId" TEXT NOT NULL,
    "dataDeCriacao" TIMESTAMP(3) NOT NULL,
    "nomeDoCliente" TEXT NOT NULL,
    "registroCliente" TEXT NOT NULL,
    "RGCliente" TEXT NOT NULL,
    "orgaoEmissorRGCliente" TEXT NOT NULL,
    "dataEmissaoCliente" TIMESTAMP(3),
    "CNHCliente" TEXT NOT NULL,
    "primeiraQualificacaoDoCliente" TEXT NOT NULL,
    "dataExpiracaoCNH" TIMESTAMP(3),
    "categoriaCNHCliente" TEXT NOT NULL,
    "clienteDataNascimento" TIMESTAMP(3),
    "generoCliente" TEXT NOT NULL,
    "clienteEmail" TEXT NOT NULL,
    "clienteTelefone" TEXT NOT NULL,
    "clienteTelefoneCelular" TEXT NOT NULL,
    "codigoPostalCliente" TEXT NOT NULL,
    "enderecoCliente" TEXT NOT NULL,
    "enderecoClienteNumero" TEXT,
    "enderecoClienteComplemento" TEXT NOT NULL,
    "enderecoClienteBairro" TEXT NOT NULL,
    "cidadeCliente" TEXT NOT NULL,
    "estadoCliente" TEXT NOT NULL,
    "placaVeiculo" TEXT NOT NULL,
    "chassiVeiculo" TEXT NOT NULL,
    "ranavamVeiculo" TEXT NOT NULL,
    "tipoVeiculo" TEXT NOT NULL,
    "marcaVeiculo" TEXT NOT NULL,
    "modeloVeiculo" TEXT NOT NULL,
    "anoModeloVeiculo" INTEGER,
    "anoFabricacaoVeiculo" INTEGER,
    "valorTabelaFIPEVeiculo" DOUBLE PRECISION NOT NULL,
    "codigoTabelaFipeVeiculo" TEXT NOT NULL,
    "tipoDoVeiculo" TEXT NOT NULL,
    "veiculoCombustivel" TEXT NOT NULL,
    "corDoVeiculo" TEXT NOT NULL,
    "KMVeiculo" TEXT NOT NULL,
    "numeroMotorVeiculo" TEXT NOT NULL,
    "precoDeAquisicao" DOUBLE PRECISION,
    "precoDoRastreador" DOUBLE PRECISION,
    "precoDaMensalidade" DOUBLE PRECISION,
    "cooperativa" TEXT NOT NULL,
    "vendedorResponsavel" TEXT NOT NULL,
    "dataDeEnvioHinova" TEXT NOT NULL,
    "estaArquivado" TEXT NOT NULL,
    "motivoArquivamento" TEXT NOT NULL,
    "statusDoCard" TEXT NOT NULL,
    "dataPagamentoConfirmado" TIMESTAMP(3),
    "tipoDePagamento" TEXT NOT NULL,
    "dataDaEspecaoAgendada" TEXT NOT NULL,
    "dataDaNegociacao" TIMESTAMP(3),
    "limparDataDeInspecao" TEXT,
    "recebimentoDaInspecao" TEXT,
    "dataDeFinalizacaoDeInspecao" TIMESTAMP(3),
    "dataDeInspecaoNegada" TIMESTAMP(3),
    "dataDeEnvioPraHinova" TEXT NOT NULL,
    "origemCotacao" TEXT NOT NULL,
    "origemDoLead" TEXT NOT NULL,
    "subOrigemDoLead" TEXT NOT NULL,
    "vendaAutomatica" TEXT NOT NULL,
    "temRastreador" TEXT NOT NULL,
    "temPagamento" TEXT NOT NULL,
    "cupomDeDesconto" TEXT NOT NULL,
    "responsavelSubstituido" TEXT,
    "nomeTabelaPreco" TEXT,
    "veiculoPraTrabalho" TEXT NOT NULL,
    "telefoneDeTrabalhoCliente" TEXT,
    "hash" TEXT,
    "nomeDoPlano" TEXT NOT NULL,
    "nomeAfiliado" TEXT NOT NULL,
    "cpfAfiliado" TEXT NOT NULL,
    "emailAfiliado" TEXT NOT NULL,
    "descontoAquisicao" TEXT NOT NULL,
    "rastreadorDesconto" TEXT NOT NULL,
    "descontoPagamentoMensal" TEXT NOT NULL,
    "descontoValorCotacao" TEXT NOT NULL,

    CONSTRAINT "CardID_pkey" PRIMARY KEY ("cardId")
);

-- CreateTable
CREATE TABLE "Tags" (
    "tagId" SERIAL NOT NULL,
    "tagName" TEXT NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("tagId")
);

-- AddForeignKey
ALTER TABLE "Tags" ADD CONSTRAINT "Tags_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "CardID"("cardId") ON DELETE RESTRICT ON UPDATE CASCADE;
