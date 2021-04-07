const createError = require('http-errors');
const { Superhero } = require('../models');

module.exports.createSuperhero = async (req, res, next) => {
  try {
    const { body } = req;
    const createdSuperhero = await Superhero.create(body);

    if (!createdSuperhero) {
      return next(createError(400));
    }

    res.status(201).send({
      data: createdSuperhero,
    });
  } catch (err) {
    next(err);
  }
};

// module.exports.getAllUsers = async (req, res, next) => {
//   try {
//     const { pagination = {} } = req;
//     const users = await User.findAll({
//       attributes: {
//         exclude: ['password'],
//       },
//       ...pagination,
//     });

//     if (!users.length) {
//       return next(createError(404, 'Users not found'));
//     }

//     res.status(200).send({
//       data: users,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

module.exports.getSuperhero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const superHero = await Superhero.findByPk(id, {});

    if (!superHero) {
      const err = createError(404, 'User not found');
      return next(err);
    }

    res.send(superHero);
  } catch (err) {
    next(err);
  }
};

// module.exports.updateUser = async (req, res, next) => {
//   try {
//     const {
//       params: { id },
//       body,
//     } = req;

//     const [rowsCount, [updatedUser]] = await User.update(body, {
//       where: { id },
//       returning: true,
//     });

//     if (rowsCount !== 1) {
//       return next(createError(400, 'User cant be updated'));
//     }

//     // delete updatedUser.password;
//     updatedUser.password = undefined;

//     res.send({ data: updatedUser });
//   } catch (err) {
//     next(err);
//   }
// };

// module.exports.deleteUser = async (req, res, next) => {
//   try {
//     const {
//       params: { id },
//     } = req;

//     const rowsCount = await User.destroy({ where: { id } });

//     if (rowsCount !== 1) {
//       return next(createError(404, 'User not found'));
//     }

//     res.send({ data: result });
//   } catch (err) {
//     next(err);
//   }
// };