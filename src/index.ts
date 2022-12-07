import power from "./api/power";
import powerDB from "./database/powerDB";
import Queue from "bull"
import dotEnv from "dotenv"
import Redis from "ioredis"

console.log({
    password: "rYh^24U84U&2",
    socket: {
        host: "172.18.0.20",
        port: 6379
    }
})

const redis = new Redis({
    password: "rYh^24U84U&2",
    host: "172.18.0.20",
    port: 6379
})

console.log(redis)

10/4
/*
const saveToDBPower = new Queue("save-to-DB-power", {
    redis: {
        host: process.env.REDIS_HOST,
        password: process.env.REDIS_PASSWD,
        port: 6379
    }
});

function tryToParseDate(dateString: any) {
    if(isNaN(new Date(dateString).getTime())) return null
    return new Date(dateString)
}

saveToDBPower.process(async (job, done) => {

    console.log("Salvando os dados");
    await powerDB.saveToDB({
        cardId: job.data.cardId,
        dataDeCriacao: tryToParseDate(job.data.createdDate) ?? new Date(),
        nomeDoCliente: job.data.clientName,
        registroCliente: job.data.clientRegistration ?? "",
        RGCliente: job.data.clientRG ?? "",
        orgaoEmissorRGCliente: job.data.clientRgExpeditor ?? "",
        dataEmissaoCliente: tryToParseDate(job.data.clientExpeditionDate),
        CNHCliente: job.data.clientCNH ?? "",
        primeiraQualificacaoDoCliente: job.data.clientFirstQualification,
        dataExpiracaoCNH: tryToParseDate(job.data.clientCNHExpiration),
        categoriaCNHCliente: job.data.clientCNHCategory,
        clienteDataNascimento: tryToParseDate(job.data.clientBirthdate),
        generoCliente: job.data.clientGender,
        clienteEmail: job.data.clientEmail ?? "",
        clienteTelefone: job.data.clientPhone ?? "",
        clienteTelefoneCelular: job.data.clientMobile,
        codigoPostalCliente: job.data.clientZipcode ?? "",
        enderecoCliente: job.data.clientAddress ?? "",
        enderecoClienteNumero: job.data.clientAddressNumber,
        enderecoClienteComplemento: job.data.clientAddressComplement ?? "",
        enderecoClienteBairro: job.data.clientAddressNeightborhood ?? "",
        cidadeCliente: job.data.clientCity,
        estadoCliente: job.data.clientState,
        placaVeiculo: job.data.vehiclePlates ?? "",
        chassiVeiculo: job.data.vehicleChassi ?? "",
        ranavamVeiculo: job.data.vehicleRenavam ?? "",
        tipoVeiculo: job.data.vehicleType,
        marcaVeiculo: job.data.vehicleBrand,
        modeloVeiculo: job.data.vehicleModel,
        anoModeloVeiculo: job.data.vehicleModelYear == "N/I" ? null : parseInt(job.data.vehicleModelYear),
        anoFabricacaoVeiculo: tryToParseDate(job.data.anoFabricacaoVeiculo),
        valorTabelaFIPEVeiculo: isNaN(parseFloat(job.data.vehicleFipeValue.replace(",", "."))) ? 0 : parseFloat(job.data.vehicleFipeValue.replace(",", ".")),
        codigoTabelaFipeVeiculo: job.data.vehicleFipeCode,
        tipoDoVeiculo: job.data.vehicleShiftType,
        veiculoCombustivel: job.data.vehicleFuel,
        corDoVeiculo: job.data.vehicleColor ?? "",
        KMVeiculo: job.data.vehicleKM,
        numeroMotorVeiculo: job.data.vehicleEngineNumber ?? "",
        precoDeAquisicao: job.data.acquisitionPrice == null ? null : parseFloat(job.data.acquisitionPrice),
        precoDoRastreador: job.data.trackerPrice == null ? null : parseFloat(job.data.trackerPrice),
        precoDaMensalidade: job.data.monthlyPaymentsPrice == null ? null : parseFloat(job.data.monthlyPaymentsPrice),
        cooperativa: job.data.cooperative,
        vendedorResponsavel: job.data.responsibleSalesman ?? "",
        dataDeEnvioHinova: job.data.hinovaSentDate,
        estaArquivado: job.data.isShelved,
        motivoArquivamento: job.data.shelvedReason,
        statusDoCard: job.data.cardStatus,
        dataPagamentoConfirmado: tryToParseDate(job.data.paymentConfirmedDate),
        tipoDePagamento: job.data.paymentType,
        dataDaEspecaoAgendada: job.data.inspectionScheduledDate ?? "",
        dataDaNegociacao: tryToParseDate(job.data.quotationNegotiatingDate),
        limparDataDeInspecao: job.data.clearForInspectionDate,
        recebimentoDaInspecao: job.data.inspectionReceivedDate,
        dataDeFinalizacaoDeInspecao: tryToParseDate(job.data.inspectionFinalizedDate),
        dataDeInspecaoNegada: tryToParseDate(job.data.inspectionDeniedDate),
        dataDeEnvioPraHinova: job.data.sentToHinovaDate,
        origemCotacao: job.data.quotationOrigin,
        origemDoLead: job.data.quotationLeadSource,
        subOrigemDoLead: job.data.quotationLeadSourceSub,
        vendaAutomatica: job.data.automaticSale,
        temRastreador: job.data.hasTracker,
        temPagamento: job.data.hasPayment,
        cupomDeDesconto: job.data.discountCoupom,
        responsavelSubstituido: job.data.responsavelSubstituido,
        nomeTabelaPreco: job.data.namePriceTable,
        veiculoPraTrabalho: job.data.workVehicle ?? "",
        telefoneDeTrabalhoCliente: job.data.clientPhoneWork,
        hash: job.data.hash,
        nomeDoPlano: job.data.namePlan,
        nomeAfiliado: job.data.nameAffiliate,
        cpfAfiliado: job.data.cpfAffiliate,
        emailAfiliado: job.data.emailAffiliate,
        descontoAquisicao: job.data.acquisitionDiscount,
        rastreadorDesconto: job.data.trackerDiscount,
        descontoPagamentoMensal: job.data.monthlyPaymentDiscount,
        descontoValorCotacao: job.data.quoteValueDiscount
    });

    done()
})

async function dist(data: Array<any>, index = 0) {
    console.log("Dstribuindo os cards", data.length)
    if(index >= data.length) return setTimeout(() => getDataFromPower(), 1200000)
    await saveToDBPower.add(data[index])
    dist(data, index+1);
}

async function getDataFromPower(startDate: Date = new Date(new Date().getTime() - 86400000), finishDate: Date = new Date()) {
    // Converte para um formato que a API da power entende.
    const requestInitialDate:string = `${startDate.getFullYear()}-${startDate.getMonth()+1}-${startDate.getDate()}`
    const requestFinishDate:string = `${finishDate.getFullYear()}-${finishDate.getMonth()+1}-${finishDate.getDate()}`
    
    console.log("Começando a requisição");
    try {
        const data:any = await power.getDB({
            from: requestInitialDate,
            to: requestFinishDate
        })
        dist(data)
    } catch(e) {
        console.log("Erro")
        getDataFromPower(startDate, finishDate);
    }


}


getDataFromPower();

*/
