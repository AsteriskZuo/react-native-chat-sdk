import type { StateChatUserInfoMessage } from './ChatUserInfoManagerItem';
import type { ApiParams } from '../__internal__/DataTypes';

export const CHATUSERINFOMN = {
  fetchOwnInfo: 'fetchOwnInfo',
  fetchUserInfoById: 'fetchUserInfoById',
  updateOwnUserInfo: 'updateOwnUserInfo',
};

export const metaData = new Map<string, ApiParams>([
  [
    CHATUSERINFOMN.fetchOwnInfo,
    {
      methodName: CHATUSERINFOMN.fetchOwnInfo,
      params: [],
    },
  ],
  [
    CHATUSERINFOMN.fetchUserInfoById,
    {
      methodName: CHATUSERINFOMN.fetchUserInfoById,
      params: [
        {
          paramName: 'userIds',
          paramType: 'object',
          paramDefaultValue: ['asterisk009', 'asterisk010'],
          domType: 'input',
        },
      ],
    },
  ],
  [
    CHATUSERINFOMN.updateOwnUserInfo,
    {
      methodName: CHATUSERINFOMN.updateOwnUserInfo,
      params: [
        {
          paramName: 'userInfo',
          paramType: 'object',
          paramDefaultValue: {
            nickName: 'newNickName',
            avatarUrl: '',
            mail: '',
            phone: '11110009',
            gender: 1,
            sign: 'hey~',
            birth: '2000-10-01',
            ext: '{}',
          },
          domType: 'input',
        },
      ],
    },
  ],
]);

let formatData: any = {};
for (let key of metaData.keys()) {
  let eachMethodParams: any = {};
  metaData.get(key)?.params.forEach((item) => {
    eachMethodParams[item.paramName] = item.paramDefaultValue;
  });
  formatData[key] = eachMethodParams;
}
export const stateData: StateChatUserInfoMessage = Object.assign(
  {},
  formatData,
  {
    sendResult: '',
    recvResult: '',
    exceptResult: '',
  }
);
