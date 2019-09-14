const Potholes = require('../models/PotholeModel.js');

//devs
Potholes.deleteMany()
  .then(() => {
    const Pothole1 = new Potholes({
      name: 'Pothole1',
      appsInProgress: []
    });
    return Pothole1.save();
  })
  .then(() => {
    const Pothole2 = new Potholes({
      name: 'Pothole2',
      appsInProgress: []
    });
    return Pothole2.save();
  })
  .then(() => {
    const Pothole3 = new Potholes({
      name: 'Pothole3',
      appsInProgress: []
    });
    return Pothole3.save();
  });
