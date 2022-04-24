import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';
import {
  ChatClient,
  ChatManagerListener,
  ChatMessage,
  ChatMessageBodyType,
} from 'react-native-chat-sdk';
import type { ChatTextMessageBody } from 'src/common/ChatMessage'; // local for test
import { styleValues } from '../__internal__/Css';
import { ApiParams, LeafScreenBase, StateBase } from './Test1';

interface State extends StateBase {
  name: string;
  cmd: string;
}

/**
 * 快速开始测试页面
 * 后面可考虑脚本生成代码
 */
export class QuickTestScreen extends LeafScreenBase<State> {
  protected static TAG = 'QuickTestScreen';
  public static route = 'QuickTestScreen';
  constructor(props: { navigation: any; route?: string }) {
    if (props.route === undefined) {
      props.route = 'QuickTestScreen';
    }
    super(props);
    this.state = {
      name: '',
      cmd: '',
      sendResult: '',
      recvResult: '',
    };
  }
  protected addListener?(): void {
    let msgListener = new (class implements ChatManagerListener {
      that: QuickTestScreen;
      constructor(parent: any) {
        this.that = parent as QuickTestScreen;
      }
      onMessagesReceived(messages: ChatMessage[]): void {
        console.log(`${QuickTestScreen.TAG}: onMessagesReceived: `, messages);
        if (
          messages.length <= 0 ||
          messages[0].body.type !== ChatMessageBodyType.TXT
        ) {
          return;
        }
        let r = messages[0].body;
        let rr = (r as ChatTextMessageBody).content;
        this.that.setState({
          cmd: `onMessagesReceived: ${rr}: `,
        });
        this.that.parseCmd(this.that.state.cmd);
      }
      onCmdMessagesReceived(messages: ChatMessage[]): void {
        console.log(
          `${QuickTestScreen.TAG}: onCmdMessagesReceived: `,
          messages
        );
      }
      onMessagesRead(messages: ChatMessage[]): void {
        console.log(`${QuickTestScreen.TAG}: onMessagesRead: `, messages);
      }
      onGroupMessageRead(groupMessageAcks: any[]): void {
        console.log(
          `${QuickTestScreen.TAG}: onGroupMessageRead: `,
          groupMessageAcks
        );
      }
      onMessagesDelivered(messages: ChatMessage[]): void {
        console.log(
          `${QuickTestScreen.TAG}: onMessagesDelivered: ${messages.length}: `,
          messages
        );
      }
      onMessagesRecalled(messages: ChatMessage[]): void {
        console.log(`${QuickTestScreen.TAG}: onMessagesRecalled: `, messages);
      }
      onConversationsUpdate(): void {
        console.log(`${QuickTestScreen.TAG}: onConversationsUpdate: `);
      }
      onConversationRead(from: string, to?: string): void {
        console.log(`${QuickTestScreen.TAG}: onConversationRead: `, from, to);
      }
    })(this);

    ChatClient.getInstance().chatManager.removeAllListener();
    ChatClient.getInstance().chatManager.addListener(msgListener);
  }
  protected removeListener?(): void {
    ChatClient.getInstance().chatManager.removeAllListener();
  }
  protected renderResult(): ReactNode {
    return (
      <View style={styleValues.containerColumn}>
        {this.renderParamWithText(this.state.name)}
        {this.renderParamWithText(this.state.cmd)}
        {this.renderSendResult()}
        {this.renderRecvResult()}
      </View>
    );
  }
  protected renderBody(): ReactNode {
    console.log(`${LeafScreenBase.TAG}: renderBody: `);
    return <View style={styleValues.containerColumn} />;
  }
  protected handleApi(): ReactNode {
    return <View />;
  }
  private callApi(iniData: ApiParams): void {
    console.log(`${LeafScreenBase.TAG}: callApi: `, iniData);
    this.setState({ name: iniData.methodName });
    switch (iniData.methodName) {
      case api_name_login:
        this.tryCatch(
          ChatClient.getInstance().login(
            ApiParamsMap.get(api_name_login)?.params[0].paramDefaultValue,
            ApiParamsMap.get(api_name_login)?.params[1].paramDefaultValue,
            ApiParamsMap.get(api_name_login)?.params[2].paramDefaultValue
          ),
          LeafScreenBase.TAG,
          iniData.methodName
        );
        break;
      default:
        break;
    }
  }
  private parseCmd(cmd: string) {
    console.log(`${LeafScreenBase.TAG}: parseCmd: `, cmd);
    switch (cmd) {
      case api_name_login:
        this.callApi(ApiParamsMap.get(api_name_login)!);
        break;
      case api_name_loginWithAgoraToken:
        this.callApi(ApiParamsMap.get(api_name_loginWithAgoraToken)!);
        break;
      default:
        break;
    }
  }
}

const api_name_login = 'login';
const api_name_loginWithAgoraToken = 'loginWithAgoraToken';
const ApiNameList: string[] = [api_name_login, api_name_loginWithAgoraToken];
console.log('quick test list:\n', ApiNameList);

const ApiParamsList: ApiParams[] = [
  {
    methodName: api_name_login,
    params: [
      {
        paramName: 'userName',
        paramType: 'string',
        paramDefaultValue: 'asteriskhx1',
      },
      {
        paramName: 'pwdOrToken',
        paramType: 'string',
        paramDefaultValue: 'qwer',
      },
      {
        paramName: 'isPassword',
        paramType: 'boolean',
        paramDefaultValue: true,
      },
    ],
  },
  {
    methodName: 'loginWithAgoraToken',
    params: [
      {
        paramName: 'userName',
        paramType: 'string',
        paramDefaultValue: 'asteriskhx1',
      },
      {
        paramName: 'agoraToken',
        paramType: 'string',
        paramDefaultValue: 'qwer',
      },
    ],
  },
];

const ApiParamsMap: Map<string, ApiParams> = new Map<string, ApiParams>();
ApiParamsList.forEach((value: ApiParams) => {
  ApiParamsMap.set(value.methodName, value);
});
