const bcrypt = require('bcryptjs');

async function login (req, res) {
  const data = req.body;

  const client = await ClientService.findClient(data.username, {
    withAuths: false,
    withSubscriptions: false,
    withPassword: true,
  });

  if (!client) {
    return res.status(404).json({
      message: '未找到该用户',
    });
  }

  const verified = await bcrypt.compare(data.password, client.password);

  if (!verified) {
    return res.status(401).json({
      message: '错误的用户名、邮箱或密码',
    });
  }

  req.session.clientId = client.id;

  res.status(200).json({
    message: '登录成功',
    client,
  });
}

module.exports = login;
