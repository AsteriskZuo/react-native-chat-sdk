_Chinese | [English](./CHANGELOG.md)_

# Update Log

## 1.6.2

- 修复 android 平台下推送提醒类型数据转换错误的问题。

## 1.6.1

- 修复 android 平台下编译报错找不到 `CMakeLists.txt` 的问题。

## 1.6.0

- 依赖的原生 SDK 升级到版本（`iOS` 4.8.1 和`Android` 4.8.2）。
- 新增登录携带扩展信息，其它设备被踢收到该扩展信息。（详见 ChatOptions.loginExtraInfo，ChatConnectEventListener.onUserDidLoginFromOtherDeviceWithInfo）
- 新增搜索消息接口：支持一次搜索多种类型的消息。（详见 ChatManager.searchMessages）
- 新增搜素指定会话消息的接口：支持一次搜索多种类型的消息。（详见 ChatManager.searchMessagesInConversation）
- 新增只删除服务器端的聊天室消息。（详见 ChatManager.removeMessagesWithTimestamp）
- 新增加入聊天室接口，可以携带扩展信息，可以决定退出所有的聊天室。携带扩展信息的用户加入聊天室，其他人收到通知。（详见 ChatRoomManager.joinChatRoomEx，ChatRoomEventListener.onMemberJoined）
- 新增会话接口：从数据库中获取指定会话指定时间段的消息数。（详见 ChatManager.getMessageCountWithTimestamp）
- native: 新增错误码 407
- native: 修复服务端获取好友列表（包含好友备注）时，在好友列表无变化时，第二次请求获取不到数据的问题。
- native: 修复特殊情况下附件发送失败，消息仍然成功发送的问题。
- native: 修复拉取漫游消息时 nextkey 错误的问题。
- native: 优化弱网服务器连接成功率。
- native: 修复拉黑联系人时缓存未及时更新的问题。
- native: 修复退出登录再登录后推送可能不工作的问题。
- 更新`ChatConnectEventListener`接口：`onUserDidLoginFromOtherDevice`作废，由`onUserDidLoginFromOtherDeviceWithInfo` 替代。
- `fetchHistoryMessages`作废，由`fetchHistoryMessagesByOptions`替代。
- `joinChatRoom`作废，由`joinChatRoomEx`替代。

## 1.5.1

- 依赖的原生 SDK 升级到版本（`iOS` 4.7.0 和`Android` 4.7.0）。 仅解决原生出现的问题。

## 1.5.0

- 依赖的原生 SDK 升级到版本（`iOS` 4.6.1 和`Android` 4.6.1）。 添加原生 SDK 提供的新功能和修复的问题。
- 更新接口 `recallMessage`, 增加扩展参数。
- 添加撤销消息通知 `onMessagesRecalledInfo`, 作废原来的通知 `onMessagesRecalled`。
- native: 修复服务端获取好友列表（包含好友备注）时，在好友列表无变化时，第二次请求获取不到数据的问题。
- native: 修复特殊情况下附件发送失败，消息仍然成功发送的问题。
- native: 修复拉取漫游消息时 `nextkey` 错误的问题。

## 1.4.0

- 依赖的原生 SDK 升级到版本（`iOS` 4.5.0 和`Android` 4.5.0）。 添加原生 SDK 提供的新功能和修复的问题。
- 新增全局配置选项
  - `enableTLS`: 是否开启安全策略。默认关闭。
  - `messagesReceiveCallbackIncludeSend`: 是否消息监听器接收发送消息的回调通知。默认关闭。
  - `regardImportMessagesAsRead`: 是否将服务器导入的消息设置为已读。
  - `useReplacedMessageContents`: 当发送的文本消息的内容被文本审核（Moderation）服务替换时，是否需要返回给发送方。
- 新增消息回调通知
  - `onMessagePinChanged`: 接收消息置顶的通知。
- 新增多设备事件
  - `CONVERSATION_UPDATE_MARK`: 多设备会话标记更新通知。
- 新增消息管理器相关接口
  - `addRemoteAndLocalConversationsMark`: 添加会话标记。
  - `deleteRemoteAndLocalConversationsMark`: 删除会话标记。
  - `fetchConversationsByOptions`: 获取指定条件的会话列表。
  - `deleteAllMessageAndConversation`: 删除所有会话以及会话的消息。
  - `pinMessage`: 置顶消息。
  - `unpinMessage`: 取消置顶消息。
  - `fetchPinnedMessages`: 获取指定会话的置顶消息。
  - `getPinnedMessages`: 获取指定会话的本地的置顶消息。
  - `getMessagePinInfo`: 获取消息置顶信息详情。
- 新增消息属性
  - `isContentReplaced`: 消息内容是否被修改。主要用户服务器端的消息审核。需要全局配置 `useReplacedMessageContents`。
  - `getPinInfo`: 获取消息的置顶详情。
- 作废接口说明
  - `getMessagesWithKeyword`: `getMsgsWithKeyword` 替换该接口。
  - `getMessages`: `getMsgs` 替换该接口。
  - `getMessageWithTimestamp`: `getMsgWithTimestamp`替换该接口。
  - `getMessagesWithMsgType`: `getConvMsgsWithMsgType`替换该接口。
  - `searchMsgFromDB`: `getMsgsWithMsgType`替换该接口。

## 1.3.1

修复:

- 接收不支持的多设备事件通知导致的程序崩溃。解决方法: 将不支持的类型包装为异常对象，通过监听器告知调用者。修改内容涉及联系人管理器、群组管理器、聊天室管理器。 相关类型 `ChatMultiDeviceEvent`。
- 接收不支持的消息体类型导致程序崩溃。将不支持的类型包装为异常对象，通过监听器告知调用者。 相关类型 `ChatMessageType`。
- `getConversation、getLatestMessage、getLatestReceivedMessage、getConversationUnreadCount、getConversationMessageCount、markMessageAsRead、markAllMessagesAsRead、updateConversationMessage、deleteMessage、deleteMessagesWithTimestamp、deleteConversationAllMessages、getMessagesWithMsgType、getMessages、getMessagesWithKeyword、getMessageWithTimestamp、setConversationExtension、removeMessagesFromServerWithMsgIds、removeMessagesFromServerWithTimestamp`、增加参数 `isChatThread` 默认值为 `false`.
- `createSendMessage` 接口从私有声明变成公开声明。
- `fetchMembersWithChatThreadFromServer` 修改返回值类型
- `ChatTextMessageBody` 修改属性名称: 由 `targetLanguages` 修改为 `targetLanguageCodes`
- 增加 `downloadAttachmentInCombine` 和 `downloadThumbnailInCombine` 接口。
- 支持多 tag 模式的日志输出。

## 1.3.0

新功能

- 依赖的原生 SDK 升级到版本（`iOS` 4.2.0 和`Android` 4.2.1）。 添加原生 SDK 提供的新功能。
- 新增好友备注。详见 `ChatContact`
- 新增全局广播。详见 `ChatMessage.isBroadcast`
- 新增获取已加入群组数量。 详见 `ChatGroupManager.fetchJoinedGroupCount`
- 更新群组申请被拒绝回调通知。 详见`ChatGroupEventListener.onRequestToJoinDeclined`

## 1.2.2

修复:

- 构造`ChatGroup`对象时，`permissionType`属性错误的问题。
- 新增丢失的获取会话消息数目的方法 `getConversationMessageCount`。
- 更新构造各种类型消息的方法，添加可选参数 `receiverList` 。
- 修复和优化消息对象属性 `ChatMessage.attributes`。

## 1.2.1

修复:

- 移除创建消息对象的参数 `secret`。该参数由服务器生成，在发送消息成功之后会获取到。

## 1.2.0

新功能

- React-Native 从 0.66.5 升级到 0.71.11

改进

- 依赖的原生 SDK 升级到版本 4.1.1（`iOS`和`Android`）。 添加原生 SDK 提供的新功能。
- 优化断线通知，分离出服务器主动断线的通知，用户可以具体处理服务器主动断线的原因。
- 使用 commitlint 优化 git 提交规范。 不符合规范的代码不能提交。
- 使用 lefthook 优化 git commit。 添加使用 gitleaks 检查敏感信息。
- 新增合并类型消息体，创建合并消息方法，以及获取合并消息内容方法。
- 支持修改文本消息内容，新增修改属性。
- 新增消息修改回调通知。
- 新增设置自定义当前设备类型和名称。
- 新增使用 token 踢指定设备和踢所有设备。
- 新增使用 token 获取在线设备列表。
- 更新多设备通知事件。
- 更新连接状态通知事件。
- 更新消息通知事件。
- 更新聊天室通知事件。

问题已修复

- 修复 android 平台下由于添加表情响应导致应用程序崩溃的问题。

### 细节

重命名 API

- 在 `ChatManager` 对象中，`deleteAllMessages` 被重命名为 `deleteConversationAllMessages`.
- 在 `ChatRoomEventListener` 对象中，`onRemoved` 被重命名为 `onMemberRemoved`.
- 在 `ChatGroupEventListener` 对象中，`onUserRemoved` 被重命名为 `onMemberRemoved`.
- 在 `ChatRoomEventListener` 对象中，`onChatRoomDestroyed` 被重命名为 `onDestroyed`。
- 在 `ChatGroupEventListener` 对象中，`onGroupDestroyed` 被重命名为 `onDestroyed`。

更新的 API

- `getLoggedInDevicesFromServer`: 添加令牌支持。
- `kickDevice`: 添加令牌支持。
- `kickAllDevices`: 添加令牌支持。

添加了 API

- `fetchConversationsFromServerWithCursor`: 从服务器获取带分页的对话列表。
- `fetchPinnedConversationsFromServerWithCursor`: 通过分页从服务器获取固定对话列表。
- `pinConversation`: 设置是否固定对话。
- `modifyMessageBody`: 修改本地消息或服务器端消息。
- `fetchCombineMessageDetail`: 获取有关组合类型消息的信息。
- `selectPushTemplate`: 选择带有模板名称的推送模板进行离线推送。
- `fetchSelectedPushTemplate`: 获取选定的推送模板以进行离线推送。

已弃用的 API

- fetchAllConversations: 请改用`fetchConversationsFromServerWithCursor`。

更新数据对象

- `ChatConversation`: 添加 `isPinned` 和 `pinnedTime` 属性。
- `ChatMessageType`: 添加`COMBINE`类型消息正文。
- `ChatMessage`: 添加`receiverList`属性。
- 创建发送消息: 添加`secret`参数。
- `ChatMessageBody`: 添加 `lastModifyOperatorId`、`lastModifyTime` 和 `modifyCount` 属性。
- `ChatOptions`: 添加 `enableEmptyConversation`、`customDeviceName` 和 `customOSType` 属性。
- `ChatMultiDeviceEvent`: 添加 `CONVERSATION_PINNED`、`CONVERSATION_UNPINNED` 和 `CONVERSATION_DELETED`。

添加数据对象

- `ChatCombineMessageBody`: 添加组合消息正文对象。

更新监听器

- `ChatConnectEventListener.onUserDidLoginFromOtherDevice`: 添加`deviceName`参数。
- `ChatConnectEventListener`: 添加 `onUserDidRemoveFromServer`、`onUserDidForbidByServer`、`onUserDidChangePassword`、`onUserDidLoginTooManyDevice`、`onUserKickedByOtherDevice`、`onUserAuthenticationFailed` 事件通知。
- `ChatConnectEventListener.onDisconnected`: 删除代码参数。
- `ChatMultiDeviceEventListener`: 添加`onMessageRemoved`事件通知。
- `ChatMultiDeviceEventListener`: 添加`onConversationEvent`事件通知。
- `ChatMessageEventListener`: 添加`onMessageContentChanged`事件通知。
- `ChatRoomEventListener.onRemoved`: 添加`reason`参数。

## 1.1.2

新功能

- 原生 SDK 升级到版本 4.0.2（`iOS`和`Android`）。
- 添加获取当前 SDK 版本的 api。
- 添加 `setMemberAttribute` 组管理器 api。
- 添加 `fetchMemberAttributes` 组管理器 api。
- 添加 `fetchMembersAttributes` 组管理器 api。
- 添加 `fetchHistoryMessagesByOptions` 聊天管理器 api。
- 添加 `deleteMessagesWithTimestamp` 聊天管理器 api。

改进

- 删除敏感信息。
- 改进日志。
- 添加 `ChatGroupEventListener.onMemberAttributesChanged` 通知。
- 更新 `fetchHistoryMessages` 聊天管理器 api。
- 添加 `ChatConnectEventListener.onAppActiveNumberReachLimit` 通知。
- 优化 iOS 文件类型的消息。

问题修复

- `renewAgoraToken`: 修复更新 token 接口。
- 安卓平台: 修复发送视频消息失败的问题。

## 1.1.1

修复:

- `fetchJoinedGroupsFromServer` 修复获取加入的公开群的扩展属性为空的问题。

---

## 1.1.0

新增特性:

- 依赖的原生 SDK 升级为 4.0.0 版本 (`iOS` 和 `Android`)。
- 新增实现聊天室属性自定义功能。
- 新增 `fetchConversationsFromServerWithPage` 实现从服务器分页获取会话列表。
- 新增 `ChatMessage#messagePriority` 实现聊天室消息优先级功能。
- 新增 `removeMessagesFromServerWithTimestamp` 和 `removeMessagesFromServerWithMsgIds` 实现单向删除服务端历史消息。

优化:

- 去除测试数据的敏感信息。
- ChatGroupManager 类方法 `inviterUser` 更名为 `inviteUser`
- ChatMultiDeviceEvent 枚举类型 `GROUP_ADD_USER_WHITE_LIST` 更名为 `GROUP_ADD_USER_ALLOW_LIST`
- ChatMultiDeviceEvent 枚举类型 `GROUP_REMOVE_USER_WHITE_LIST` 更名为 `GROUP_REMOVE_USER_ALLOW_LIST`

修复:

- 原生部分修复不安全代码。
- 获取会话可能失败的问题。
- 解决回调方法可能多次进入主线程导致死锁的问题。该问题只可能发生在 iOS 平台。

---

## 1.0.11

更新内容:

- 依赖的原生 SDK 升级为 3.9.9 版本 (`iOS` 和 `Android`)。

修复内容:

- 修复极端情况下 SDK 崩溃的问题。
- 其它修复内容，详见 3.9.8 和 3.9.9 版本(`iOS` 和 `Android`)。

---

## 1.0.10

修复内容:

- android 平台进行 json 转换可能出现超限问题，返回结果的数据元素超过 50 个会抛出异常。涉及返回数组的接口。

---

## 1.0.9

主要变更:

- 依赖的原生 SDK 升级为 3.9.7.1 版本 (仅升级 `iOS` 版本)。

修复内容:

- 修复聊天室属性相关问题。
- 更新群组监听器。

更新内容:

- `ChatGroupEventListener` add `onDetailChanged` notification.
- `ChatGroupEventListener` add `onStateChanged` notification.

---

## 1.0.8

主要变更:

- 依赖的原生 SDK 升级为 3.9.7 版本。
- 新增聊天室自定义属性功能。
- 新增限制连接边缘节点的范围。
- 群组属性添加禁用状态，需要开发者在服务端设置。

修复内容:

- 修复极少数场景下，从服务器获取较大数量的消息时失败的问题。
- 修复数据统计不正确的问题。
- 修复极少数场景下打印日志导致的崩溃。

增加内容:

- `updatePushNickname`: 更新推送显示标题。
- `updatePushDisplayStyle`: 更新推送显示的样式。
- `fetchPushOptionFromServer`: 获取推送样式配置信息。
- `fetchChatRoomAttributes`: 获取聊天室自定义属性。
- `addAttributes`: 添加聊天室自定义属性。
- `removeAttributes`: 删除聊天室自定义属性。
- `ChatPushDisplayStyle`: 推送显示样式类型。
- `ChatPushOption`: 推送选项类型。
- `ChatAreaCode`: 区域代码类型。

重命名内容:

- `ChatGroupPermissionType` 是 `ChatGroupType` 的新名字。

更新内容:

- `ChatGroupOptions` 增加 `isDisabled` 属性。
- `ChatRoomEventListener` 增加 `onSpecificationChanged`, `onAttributesUpdated`, `onAttributesRemoved` 通知。

---

## 1.0.7

Improvements

- The dependent native SDK (iOS and Android) is upgraded to V3.9.5.
- Support push notification settings operation. see {@link ChatPushManager}
- Support push config setting for FCM. see {@link ChatPushConfig}
- Support push initialization Settings. see {@link ChatOptions#pushConfig}
- Support push config setting update. see {@link ChatClient#updatePushConfig}
- The listener method has been made optional.
- Update the release script.
- sync update demonstration app.

Issues fixed

- Fix bug: Json parse error for type field.

The following APIs are added:

- `setConversationExtension`: set conversation extension.
- `insertMessage`: insert a message.
- `deleteMessagesBeforeTimestamp`: Deletes messages before the specified timestamp.
- `getThreadConversation`: Gets or creates a conversation for thread.

The following APIs are renamed:

- `unSubscribe` is renamed `unsubscribe`.

The following Object are updated:

- `ChatConversation` add `isChatThread` attribute.

---

## 1.0.6

New features

- Add a field {@link ChatMessage#isOnline} in chat messages.

Improvements

- The API reference example is updated.
- The dependent native SDK (iOS and Android) is upgraded to V3.9.4.
- React-Native upgrade to 0.66.4 LTS version.
- The android platform no longer needs to perform additional operations.
- agora-react-native-chat was changed to react-native-agora-chat.

The following APIs are renamed:

- `deleteRemoteConversation` is renamed `removeConversationFromServer`.
- `loadAllConversations` is renamed `getAllConversations`.
- `getConversationsFromServer` is renamed `fetchAllConversations`.
- `getUnreadMessageCount` is renamed `getUnreadCount`.
- `fetchLatestMessage` is renamed `getLatestMessage`.
- `fetchLastReceivedMessage` is renamed `getLatestReceivedMessage`.
- `unreadCount` is renamed `getConversationUnreadCount`.
- `getMessagesFromTime` is renamed `getMessageWithTimestamp`.
- `WhiteList` is renamed `AllowList`.
- `BlackList` is renamed `BlockList`.

The following API are deprecated and removed:

- `getMessageById`
- `insertMessage`
- `appendMessage`

Issues fixed

- Fix bug: Type declaration entry point is incorrect
- Optimize: The android platform no longer needs to perform additional operations.

---

## 1.0.5

- Implement IM foundation functions.
- Implement base message send and receive functions.
- Implement group functions.
- Implement chat room functions.
- Implement contact functions.
- Implement user functions.
- Implement user presence functions.
- Implement message moderation functions.
- Implement message translation functions.
- Implement message reaction functions.
- Implement message thread functions.
- The dependent native SDK (ios and android) was upgraded to version 3.9.3.
