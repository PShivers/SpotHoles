const Potholes = require('../models/potholeModel.js');

const PotholesController = {
  index: async (req, res) => {
    try {
      const potholes = await Potholes.find({});
      res.json(potholes);
    } catch (err) {
      console.log(err);
    }
  },

  show: async (req, res) => {
    try {
      const potholeId = req.params.id;
      const potholes = await Devs.findById(potholeId);
      res.json(potholes);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },

  create: async (req, res) => {
    try {
      const newPothole = req.body;
      const savedPotholes = await PotHoles.create(newPothole);
      res.json(savedPotholes);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  update: async (req, res) => {
    try {
      const potholeId = req.params.id;
      const updatedPothole = req.body;
      const savedPothole = await Devs.findByIdAndUpdate(
        potholeId,
        updatedPothole,
        {
          new: true
        }
      );
      res.json(savedPothole);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  delete: async (req, res) => {
    try {
      const potholeId = req.params.id;
      await Potholes.findByIdAndRemove(potholeId);
      res.json({
        msg: 'Successfully Deleted'
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};

module.exports = PotholesController;
