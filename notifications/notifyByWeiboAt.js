/**
 * 使用浪潮的绑定账号发布微博并 @ 用户
 */
const SeqModels = require('../seqModels');
const disableSubscriptionMethod = require('./disableSubscriptionMethod');

async function notifyByWeiboAt({ contact, subscription, template }) {
  if (!sails.config.globals.officialAccount.weibo) {
    return sails.log.error(new Error('未配置官方微博账号'));
  }

  let profileId = sails.config.globals.officialAccount.weibo;
  profileId = typeof (profileId) === 'object'
    ? profileId[Math.floor(Math.random() * profileId.length)]
    : profileId;

  const auth = await SeqModels.Auth.findOne({
    where: {
      site: 'weibo',
      profileId,
    },
  });

  if (!auth) {
    return sails.log.error(new Error(`未找到浪潮微博 ${profileId} 的绑定`));
  }

  if (!contact.auth) return disableSubscriptionMethod(subscription);

  let message = '@' + contact.auth.profile.screen_name + ' ';
  message += UtilService.shortenString(template.message, 96);
  message += ' ' + UtilService.generateRandomV2landString(4);
  message += ' ' + template.url;

  return WeiboService.post(auth, message);
}

module.exports = notifyByWeiboAt;
