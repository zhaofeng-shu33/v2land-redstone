const SeqModels = require('../../../seqModels');

async function createMedia (req, res) {
  if (!(req.body && req.body.name && req.body.type)) {
    return res.status(400).json({
      message: '缺少参数 name 或 type',
    });
  }

  const data = req.body;

  try {
    await sequelize.transaction(async transaction => {
      media = await SeqModels.Media.create(data, { transaction });
    });

    res.status(201).json({
      message: '创建成功',
      media,
    });
  } catch (err) {
    return res.serverError(err);
  }

}

module.exports = createEvent;
