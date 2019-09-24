const Potholes = require('../models/PotholeModel.js');

//devs
Potholes.deleteMany()
  .then(() => {
    const Pothole1 = new Potholes({
      lat: '34.25W',
      long: '45.89N',
      severity: 2,
      isFixed: false,
      position: { lat: 33.749, lng: -84.36 }
    });
    return Pothole1.save();
  })
  .then(() => {
    const Pothole2 = new Potholes({
      lat: '68.69W',
      long: '78.34S',
      severity: 3,
      isFixed: false,
      position: { lat: 33.749, lng: -84.4 }
    });
    return Pothole2.save();
  })
  .then(() => {
    const Pothole3 = new Potholes({
      lat: '79.33E',
      long: '89.22N',
      severity: 5,
      isFixed: false,
      position: { lat: 33.749, lng: -84.38 }
    });
    return Pothole3.save();
  });
