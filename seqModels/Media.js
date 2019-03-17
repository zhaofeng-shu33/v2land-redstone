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
  username: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  homepage: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  icon: {
    type: Sequelize.TEXT,
    allowNull: true
  }
}, {
  freezeTableName: true,
  validate: {
    socialMediaHasUsername(){
      if(this.type=='social media' && this.username == null)
        throw new Error('type with social media must have username field filled.')
    }
  }
});

module.exports = Media;
