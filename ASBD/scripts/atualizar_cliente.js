db.clientes.updateOne(
    { _id: ObjectId("id_do_cliente") },
    {
      $set: {
        nome: "João da Silva",
        endereco: "Rua dos xurastei, 123",
        telefone: "(51) 912345678"
      }
    }
  );
  