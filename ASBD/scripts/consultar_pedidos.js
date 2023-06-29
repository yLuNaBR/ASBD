const MongoClient = require('mongodb').MongoClient;

// Configurações de conexão com o banco de dados
const url = 'mongodb://localhost:27017';
const dbName = 'ASBD';

// Função para consultar os pedidos
async function consultarPedidos() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();

    const db = client.db(dbName);

    const pipeline = [
        { $match: { status: "entregue" } },
        {
          $lookup: {
            from: "clientes",
            localField: "cliente_id",
            foreignField: "_id",
            as: "cliente"
          }
        },
        { $unwind: "$cliente" },
        {
          $group: {
            _id: "$cliente._id",
            cliente: { $first: "$cliente" },
            totalPedidos: { $sum: 1 },
            valorTotal: { $sum: "$valor_total" }
          }
        },
        { $sort: { valorTotal: -1 } }
      ];
      

    const resultado = await db.collection('pedidos').aggregate(pipeline).toArray();

    console.log(resultado);
  } catch (error) {
    console.error('Erro ao consultar os pedidos:', error);
  } finally {
    await client.close();
  }
}

consultarPedidos();
