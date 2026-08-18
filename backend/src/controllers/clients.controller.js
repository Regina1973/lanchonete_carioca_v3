const clients = [];

exports.getClients = () => {
  return clients;
};

exports.createClient = (client) => {
  const newClient = {
    id: Date.now().toString(),
    ...client,
  };

  clients.push(newClient);

  return newClient;
};

exports.getClientById = (id) => {
  return clients.find((client) => client.id === id);
};

exports.updateClient = (id, updatedData) => {
  const index = clients.findIndex(
    (client) => client.id === id
  );

  if (index === -1) {
    return null;
  }

  clients[index] = {
    ...clients[index],
    ...updatedData,
  };

  return clients[index];
};

const clientService = require("../services/clients.service");

exports.getClients = (req, res) => {
  const clients = clientService.getClients();
  res.json(clients);
};

exports.createClient = (req, res) => {
  const newClient = clientService.createClient(req.body);
  res.status(201).json(newClient);
};

exports.getClientById = (req, res) => {
  const client = clientService.getClientById(req.params};