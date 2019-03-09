const Sequelize = require('sequelize');

const Media = global.sequelize.define('media', {
  type: {
    type: Sequelize.ENUM(
      'traditional media',
      'social media',
      'institution'
    ),
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  name: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  icon: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  freezeTableName: true,
});

module.exports = Media;
