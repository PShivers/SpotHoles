const Potholes = require('../models/PotholeModel.js');

//devs
Potholes.deleteMany()
  .then(() => {
    const Pothole1 = new Potholes({
      lat: String,
      long: String,
      severity: Number,
      isFixed: Boolean
    });
    return Pothole1.save();
  })
  .then(() => {
    const Pothole2 = new Potholes({
      lat: String,
      long: String,
      severity: Number,
      isFixed: Boolean
    });
    return Pothole2.save();
  })
  .then(() => {
    const Pothole3 = new Potholes({
      lat: String,
      long: String,
      severity: Number,
      isFixed: Boolean
    });
    return Pothole3.save();
  });
