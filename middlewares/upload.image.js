const multer = require('multer');
const { STATIC_PATH } = require('../config/config');

// const fileFilter = (req, file, cb) => {
//     if (!file.originalname.match(/\.jpg|jpeg|png|gif)$/i)) {
//       return cb(
//         new Error('Only image files (jpg, jpeg, png, gif) are allowed!'),
//         false
//       );
//     } else {
//       cb(null, true);
//     }
//   };

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, STATIC_PATH);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname}`);
  },
});
const upload = multer({ storage: storage});

module.exports = upload.array('images', 10);
