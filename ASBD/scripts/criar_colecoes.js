db.createCollection("clientes");
db.clientes.insertOne({
  nome: "João Silva",
  endereco: "Rua A, 123",
  telefone: "123456789"
});

db.createCollection("pedidos");
db.pedidos.insertOne({
  cliente_id: ObjectId("1"),
  data_pedido: ISODate("2023-06-30T10:00:00Z"),
  status: "pendente",
  itens: [
    ObjectId("1"),
    ObjectId("2")
  ]
});

db.createCollection("itempedidos");
db.itempedidos.insertOne({
  pedido_id: ObjectId("2"),
  produto_id: ObjectId("1"),
  quantidade: 2
});

db.createCollection("produtos");
db.produtos.insertOne({
  nome: "Pizza de Calabresa",
  tamanho: "grande",
  preco: 35.99
});
