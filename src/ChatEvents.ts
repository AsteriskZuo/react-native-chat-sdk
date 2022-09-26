import type { ChatCircleUserRole } from './common/ChatCircleUser';
import { ChatError } from './common/ChatError';
import type { ChatGroupMessageAck } from './common/ChatGroup';
import type { ChatMessage } from './common/ChatMessage';
import type { ChatMessageReactionEvent } from './common/ChatMessageReaction';
import type { ChatMessageThreadEvent } from './common/ChatMessageThread';
import type { ChatPresence } from './common/ChatPresence';

/**
 * The event types in multi-device login scenarios.
 *
 * This class takes user A that uses both Device A1 and Device A2 as an example to describe when the various types of multi-device events are triggered.
 */
export enum ChatMultiDeviceEvent {
  /**
   * If user A deletes a contact on Device A1, this event is triggered on Device A2.
   */
  CONTACT_REMOVE = 2,
  /**
   * If user A accepts a friend request on Device A1, this event is triggered on Device A2.
   */
  CONTACT_ACCEPT,
  /**
   * If user A declines a friend request on Device A1, this event is triggered on Device A2.
   */
  CONTACT_DECLINE,
  /**
   * If user A adds another user to the block list on Device A1, this event is triggered on Device A2.
   */
  CONTACT_BAN,
  /**
   * If user A removes another user from the block list on Device A1, this event is triggered on Device A2.
   */
  CONTACT_ALLOW,

  /**
   * If user A creates a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_CREATE = 10,
  /**
   * If user A destroys a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_DESTROY,
  /**
   * If user A joins a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_JOIN,
  /**
   * If user A leaves a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_LEAVE,
  /**
   * If user A requests to join a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_APPLY,
  /**
   * If user A accepts a request to join the chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_APPLY_ACCEPT,
  /**
   * If user A declines a request to join the chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_APPLY_DECLINE,
  /**
   * If user A invites a user to join the chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_INVITE,
  /**
   * If user A accepts a group invitation on Device A1, this event is triggered on Device A2.
   */
  GROUP_INVITE_ACCEPT,
  /**
   * If user A declines a group invitation on Device A1, this event is triggered on Device A2.
   */
  GROUP_INVITE_DECLINE,
  /**
   * If user A removes a user from a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_KICK,
  /**
   * If user A is added to the group block list on Device A1, this event is triggered on Device A2.
   */
  GROUP_BAN,
  /**
   * If user A is removed from the group block list on Device A1, this event is triggered on Device A2.
   */
  GROUP_ALLOW,
  /**
   * If user A blocks messages from a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_BLOCK,
  /**
   * If user A unblocks messages from a chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_UNBLOCK,
  /**
   * If user A changes the group owner on Device A1, this event is triggered on Device A2.
   */
  GROUP_ASSIGN_OWNER,
  /**
   * If user A adds a group admin on Device A1, this event is triggered on Device A2.
   */
  GROUP_ADD_ADMIN,
  /**
   * If user A removes a group admin on Device A1, this event is triggered on Device A2.
   */
  GROUP_REMOVE_ADMIN,
  /**
   * If user A mutes a group member on Device A1, this event is triggered on Device A2.
   */
  GROUP_ADD_MUTE,
  /**
   * If user A unmutes a group member on Device A1, this event is triggered on Device A2.
   */
  GROUP_REMOVE_MUTE,
  /**
   * If user A adds other members to the allow list of the chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_ADD_USER_WHITE_LIST,
  /**
   * If user A removes other members from the allow list of the chat group on Device A1, this event is triggered on Device A2.
   */
  GROUP_REMOVE_USER_WHITE_LIST,
  /**
   * If user A mutes all chat group members on Device A1, this event is triggered on Device A2.
   *
   */
  GROUP_ALL_BAN,
  /**
   * If user A unmutes all chat group members on Device A1, this event is triggered on Device A2.
   *
   * Even if all chat group members are unmuted, members on the mute list still cannot send messages in the group.
   */
  GROUP_REMOVE_ALL_BAN,

  /**
   * If user A creates a message thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_CREATE = 40,
  /**
   * If user A destroys a message thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_DESTROY,
  /**
   * If user A joins a message thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_JOIN,
  /**
   * If user A leaves a message thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_LEAVE,
  /**
   * If user A updates the message thread name, or sends or recalls a message in thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_UPDATE,
  /**
   * If user A kicks a user from a message thread on Device A1, this event is triggered on Device A2.
   */
  THREAD_KICK,

  /**
   * If user A creates a server, this event is triggered on Device A2.
   */
  SERVER_CREATE = 55,
  /**
   * If user A destroys a server, this event is triggered on Device A2.
   */
  SERVER_DELETE,
  /**
   * If user A updates a server, this event is triggered on Device A2.
   */
  SERVER_UPDATE,
  /**
   * If user A joins a server, this event is triggered on Device A2.
   */
  SERVER_JOIN,
  /**
   * If user A leaves a server, this event is triggered on Device A2.
   */
  SERVER_LEAVE,
  /**
   * If user A accepts a server invitation, this event is triggered on Device A2.
   */
  SERVER_INVITE_ACCEPT,
  /**
   * If user A declines a server invitation, this event is triggered on Device A2.
   */
  SERVER_INVITE_DECLINE,
  /**
   * If user A sets the role of a server member, this event is triggered on Device A2.
   */
  CIRCLE_SERVER_SET_ROLE,
  /**
   * If user A removes a server member, this event is triggered on Device A2.
   */
  CIRCLE_SERVER_REMOVE_USER,
  /**
   * If user A invites a user to join a server, this event is triggered on Device A2.
   */
  CIRCLE_SERVER_INVITE_USER,
  /**
   * If user A creates a channel, this event is triggered on Device A2.
   */
  CHANNEL_CREATE = 70,
  /**
   * If user A destroys a channel, this event is triggered on Device A2.
   */
  CHANNEL_DELETE,
  /**
   * If user A updates a channel, this event is triggered on Device A2.
   */
  CHANNEL_UPDATE,
  /**
   * If user A joins a channel, this event is triggered on Device A2.
   */
  CHANNEL_JOIN,
  /**
   * If user A accepts a channel invitation, this event is triggered on Device A2.
   */
  CHANNEL_INVITATION_ACCEPT,
  /**
   * If user A declines a channel invitation, this event is triggered on Device A2.
   */
  CHANNEL_INVITATION_DECLINE,
  /**
   * If user A leaves a channel, this event is triggered on Device A2.
   */
  CHANNEL_LEAVE,
  /**
   * If user A removes a channel member, this event is triggered on Device A2.
   */
  CIRCLE_CHANNEL_REMOVE_USER,
  /**
   * If user A invites a user to join a channel, this event is triggered on Device A2.
   */
  CIRCLE_CHANNEL_INVITE_USER,
  /**
   * If user A mutes a channel member, this event is triggered on Device A2.
   */
  CIRCLE_CHANNEL_MEMBER_ADD_MUTE,
  /**
   * If user A unmutes a channel member, this event is triggered on Device A2.
   */
  CIRCLE_CHANNEL_MEMBER_REMOVE_MUTE,
}

/**
 * Converts the multi-device event from Int to enum.
 *
 * @param params The multi-device event of the Int type.
 * @returns The multi-device event of the enum type.
 */
export function ChatMultiDeviceEventFromNumber(
  params: number
): ChatMultiDeviceEvent {
  switch (params) {
    case 2:
      return ChatMultiDeviceEvent.CONTACT_REMOVE;
    case 3:
      return ChatMultiDeviceEvent.CONTACT_ACCEPT;
    case 4:
      return ChatMultiDeviceEvent.CONTACT_DECLINE;
    case 5:
      return ChatMultiDeviceEvent.CONTACT_BAN;
    case 6:
      return ChatMultiDeviceEvent.CONTACT_ALLOW;

    case 10:
      return ChatMultiDeviceEvent.GROUP_CREATE;
    case 11:
      return ChatMultiDeviceEvent.GROUP_DESTROY;
    case 12:
      return ChatMultiDeviceEvent.GROUP_JOIN;
    case 13:
      return ChatMultiDeviceEvent.GROUP_LEAVE;
    case 14:
      return ChatMultiDeviceEvent.GROUP_APPLY;
    case 15:
      return ChatMultiDeviceEvent.GROUP_APPLY_ACCEPT;
    case 16:
      return ChatMultiDeviceEvent.GROUP_APPLY_DECLINE;
    case 17:
      return ChatMultiDeviceEvent.GROUP_INVITE;
    case 18:
      return ChatMultiDeviceEvent.GROUP_INVITE_ACCEPT;
    case 19:
      return ChatMultiDeviceEvent.GROUP_INVITE_DECLINE;
    case 20:
      return ChatMultiDeviceEvent.GROUP_KICK;
    case 21:
      return ChatMultiDeviceEvent.GROUP_BAN;
    case 22:
      return ChatMultiDeviceEvent.GROUP_ALLOW;
    case 23:
      return ChatMultiDeviceEvent.GROUP_BLOCK;
    case 24:
      return ChatMultiDeviceEvent.GROUP_UNBLOCK;
    case 25:
      return ChatMultiDeviceEvent.GROUP_ASSIGN_OWNER;
    case 26:
      return ChatMultiDeviceEvent.GROUP_ADD_ADMIN;
    case 27:
      return ChatMultiDeviceEvent.GROUP_REMOVE_ADMIN;
    case 28:
      return ChatMultiDeviceEvent.GROUP_ADD_MUTE;
    case 29:
      return ChatMultiDeviceEvent.GROUP_REMOVE_MUTE;
    case 30:
      return ChatMultiDeviceEvent.GROUP_ADD_USER_WHITE_LIST;
    case 31:
      return ChatMultiDeviceEvent.GROUP_REMOVE_USER_WHITE_LIST;
    case 32:
      return ChatMultiDeviceEvent.GROUP_ALL_BAN;
    case 33:
      return ChatMultiDeviceEvent.GROUP_REMOVE_ALL_BAN;

    case 40:
      return ChatMultiDeviceEvent.THREAD_CREATE;
    case 41:
      return ChatMultiDeviceEvent.THREAD_DESTROY;
    case 42:
      return ChatMultiDeviceEvent.THREAD_JOIN;
    case 43:
      return ChatMultiDeviceEvent.THREAD_LEAVE;
    case 44:
      return ChatMultiDeviceEvent.THREAD_UPDATE;
    case 45:
      return ChatMultiDeviceEvent.THREAD_KICK;

    case 55:
      return ChatMultiDeviceEvent.SERVER_CREATE;
    case 56:
      return ChatMultiDeviceEvent.SERVER_DELETE;
    case 57:
      return ChatMultiDeviceEvent.SERVER_UPDATE;
    case 58:
      return ChatMultiDeviceEvent.SERVER_JOIN;
    case 59:
      return ChatMultiDeviceEvent.SERVER_LEAVE;
    case 60:
      return ChatMultiDeviceEvent.SERVER_INVITE_ACCEPT;
    case 61:
      return ChatMultiDeviceEvent.SERVER_INVITE_DECLINE;
    case 62:
      return ChatMultiDeviceEvent.CIRCLE_SERVER_SET_ROLE;
    case 63:
      return ChatMultiDeviceEvent.CIRCLE_SERVER_REMOVE_USER;
    case 64:
      return ChatMultiDeviceEvent.CIRCLE_SERVER_INVITE_USER;

    case 70:
      return ChatMultiDeviceEvent.CHANNEL_CREATE;
    case 71:
      return ChatMultiDeviceEvent.CHANNEL_DELETE;
    case 72:
      return ChatMultiDeviceEvent.CHANNEL_UPDATE;
    case 73:
      return ChatMultiDeviceEvent.CHANNEL_JOIN;
    case 74:
      return ChatMultiDeviceEvent.CHANNEL_INVITATION_ACCEPT;
    case 75:
      return ChatMultiDeviceEvent.CHANNEL_INVITATION_DECLINE;
    case 76:
      return ChatMultiDeviceEvent.CHANNEL_LEAVE;
    case 77:
      return ChatMultiDeviceEvent.CIRCLE_CHANNEL_REMOVE_USER;
    case 78:
      return ChatMultiDeviceEvent.CIRCLE_CHANNEL_INVITE_USER;
    case 79:
      return ChatMultiDeviceEvent.CIRCLE_CHANNEL_MEMBER_ADD_MUTE;
    case 80:
      return ChatMultiDeviceEvent.CIRCLE_CHANNEL_MEMBER_REMOVE_MUTE;

    default:
      throw new ChatError({
        code: 1,
        description: `This type is not supported. ` + params,
      });
  }
}

/**
 * The connection event listener.
 *
 * In the case of disconnection in an unstable network environment, the app using the SDK receives the `onDisconnected` callback.
 *
 * You do not need to reconnect manually as the chat SDK will handle it automatically.
 *
 * There are two connection callbacks:
 * - `onConnected`: Occurs when the connection is set up.
 * - `onDisconnected`: Occurs when the connection breaks down.
 *
 * Adds a connection event listener:
 *
 *  ```typescript
 *  let listener = new (class s implements ChatConnectEventListener {
 *    onTokenWillExpire(): void {
 *      chatlog.log('ConnectScreen.onTokenWillExpire');
 *    }
 *    onTokenDidExpire(): void {
 *      chatlog.log('ConnectScreen.onTokenDidExpire');
 *    }
 *    onConnected(): void {
 *      chatlog.log('ConnectScreen.onConnected');
 *    }
 *    onDisconnected(errorCode?: number): void {
 *      chatlog.log('ConnectScreen.onDisconnected', errorCode);
 *    }
 *  })();
 *  ChatClient.getInstance().addConnectionListener(listener);
 *  ```
 * Removes a connection event listener:
 *
 *  ```typescript
 *  ChatClient.getInstance().removeConnectionListener(listener);
 *  ```
 */
export interface ChatConnectEventListener {
  /**
   * Occurs when the SDK connects to the chat server successfully.
   */
  onConnected?(): void;

  /**
   * Occurs when the SDK disconnects from the chat server.
   *
   * The logout does not necessarily occur at the bottom level when the SDK is disconnected.
   *
   * @param errorCode The error code. See {@link ChatError}.
   */
  onDisconnected?(errorCode?: number): void;

  /**
   * Occurs when the Agora token is about to expire.
   */
  onTokenWillExpire?(): void;

  /**
   * Occurs when the Agora token has expired.
   */
  onTokenDidExpire?(): void;
}

/**
 * The multi-device event listener.
 *
 * The listener listens for the actions of the current user on other devices, including contact events and group events.
 */
export interface ChatMultiDeviceEventListener {
  /**
   * Occurs when a contact event occurs.
   *
   * @param event The event type.
   * @param target The user ID.
   * @param ext The extension of user information.
   */
  onContactEvent?(
    event?: ChatMultiDeviceEvent,
    target?: string,
    ext?: string
  ): void;

  /**
   * Occurs when a group event occurs.
   *
   * @param event The event type.
   * @param target The group ID.
   * @param usernames The array of user IDs.
   */
  onGroupEvent?(
    event?: ChatMultiDeviceEvent,
    target?: string,
    usernames?: Array<string>
  ): void;

  /**
   * Occurs when a thread event occurs.
   *
   * @param event The event type.
   * @param target The group ID.
   * @param usernames The array of user IDs.
   */
  onThreadEvent?(
    event?: ChatMultiDeviceEvent,
    target?: string,
    usernames?: Array<string>
  ): void;

  onCircleServerEvent?(
    event?: ChatMultiDeviceEvent,
    target?: string,
    usernames?: Array<string>
  ): void;

  onCircleChannelEvent?(
    event?: ChatMultiDeviceEvent,
    target?: string,
    usernames?: Array<string>
  ): void;
}

/**
 * The custom event listener.
 */
export interface ChatCustomEventListener {
  onDataReceived(params: any): void;
}

/**
 * The message event listener.
 *
 * This listener listens for message state changes:
 *
 * - If messages are sent successfully, a delivery receipt will be returned to the sender (the delivery receipt function needs to be enabled: {@link ChatOptions#requireDeliveryAck(boolean)}.
 *
 * - If the recipient reads the received message, a read receipt will be returned to the sender (the read receipt function needs to be enabled: {@link ChatOptions#requireAck(boolean)})
 *
 * During message delivery, the message ID will be changed from a local uuid to a global unique ID that is generated by the server to uniquely identify a message on all devices using the SDK.
 *
 * Adds a message event listener:
 *
 *   ```typescript
 *   let msgListener = new (class ss implements ChatMessageEventListener {
 *     onMessagesReceived(messages: ChatMessage[]): void {
 *       chatlog.log('ConnectScreen.onMessagesReceived', messages);
 *     }
 *     onCmdMessagesReceived(messages: ChatMessage[]): void {
 *       chatlog.log('ConnectScreen.onCmdMessagesReceived', messages);
 *     }
 *     onMessagesRead(messages: ChatMessage[]): void {
 *       chatlog.log('ConnectScreen.onMessagesRead', messages);
 *     }
 *     onGroupMessageRead(groupMessageAcks: ChatGroupMessageAck[]): void {
 *       chatlog.log('ConnectScreen.onGroupMessageRead', groupMessageAcks);
 *     }
 *     onMessagesDelivered(messages: ChatMessage[]): void {
 *       chatlog.log('ConnectScreen.onMessagesDelivered', messages);
 *     }
 *     onMessagesRecalled(messages: ChatMessage[]): void {
 *       chatlog.log('ConnectScreen.onMessagesRecalled', messages);
 *     }
 *     onConversationsUpdate(): void {
 *       chatlog.log('ConnectScreen.onConversationsUpdate');
 *     }
 *     onConversationRead(from: string, to?: string): void {
 *       chatlog.log('ConnectScreen.onConversationRead', from, to);
 *     }
 *   })();
 *   ChatClient.getInstance().chatManager.addListener(msgListener);
 *   ```
 *
 * Removes a message event listener:
 *
 *   ```typescript
 *   ChatClient.getInstance().chatManager.delListener(this.msgListener);
 *   ```
 */
export interface ChatMessageEventListener {
  /**
   * Occurs when a message is received.
   *
   * This callback is triggered to notify the user of the message that is received, such as texts or an image, video, voice, location, or file.
   *
   * @param messages The received message(s).
   */
  onMessagesReceived?(messages: Array<ChatMessage>): void;

  /**
   * Occurs when a command message is received.
   *
   * Unlike {@link #onMessageReceived(messages: Array<ChatMessage>)}, this callback only contains a command message body that is usually invisible to users.
   *
   * @param messages The received command message(s).
   */
  onCmdMessagesReceived?(messages: Array<ChatMessage>): void;

  /**
   * Occurs when a read receipt is received for a message.
   *
   * @param messages The read receipt(s).
   */
  onMessagesRead?(messages: Array<ChatMessage>): void;

  /**
   * Occurs when a read receipt is received for a group message.
   *
   * @param groupMessageAcks The read receipt(s) for group message(s).
   */
  onGroupMessageRead?(groupMessageAcks: Array<ChatGroupMessageAck>): void;

  /**
   * Occurs when a delivery receipt is received.
   *
   * @param messages The message(s) for which delivery receipt(s) is sent.
   */
  onMessagesDelivered?(messages: Array<ChatMessage>): void;

  /**
   * Occurs when a received message is recalled.
   *
   * If the recipient is offline when the message is delivered and recalled, the recipient only receives this callback instead of the message.
   *
   * @param messages The recalled message(s).
   */
  onMessagesRecalled?(messages: Array<ChatMessage>): void;

  /**
   * Occurs when the conversation is updated.
   *
   * This callback is triggered only when a conversation is added or removed.
   */
  onConversationsUpdate?(): void;

  /**
   * Occurs when a conversation read receipt is received.
   *
   * This callback occurs in either of the following cases:
   *
   * - The message is read by the recipient and the conversation read receipt is sent. Upon receiving this event, the SDK sets the `isAcked` property of the message in the conversation to `true` in the local database.
   *
   * - In a multi-device login scenario, when one device sends a conversation receipt, the server will set the number of unread messages to `0`, call the callback method on the other devices, and set the `isRead` property of the message in the conversation to `true` in the local database.
   *
   *  @param from The user who sends the conversation read receipt.
   *  @param to The user who receives the conversation read receipt.
   */
  onConversationRead?(from: string, to?: string): void;

  /**
   * Occurs when a message reaction changes.
   *
   * @param list The reaction change event.
   */
  onMessageReactionDidChange?(list: Array<ChatMessageReactionEvent>): void;

  /**
   * Occurs when a message thread is created.
   *
   * Each member of the group where the message thread belongs can call this method.
   *
   * @param event The message thread creation event.
   */
  onChatMessageThreadCreated?(event: ChatMessageThreadEvent): void;
  /**
   * Occurs when a message thread is updated.
   *
   * This method is triggered when the message thread name is changed or a message in the message thread is updated.
   *
   * Each member of the group where the message thread belongs can call this method.
   *
   * @param event The message thread update event.
   */
  onChatMessageThreadUpdated?(event: ChatMessageThreadEvent): void;
  /**
   * Occurs when a message thread is destroyed.
   *
   * Each member of the group where the message thread belongs can call this method.
   *
   * @param event The message thread destruction event.
   */
  onChatMessageThreadDestroyed?(event: ChatMessageThreadEvent): void;
  /**
   * Occurs when the current user is removed from the message thread by the admin.
   *
   * @param event The message thread user removal event.
   */
  onChatMessageThreadUserRemoved?(event: ChatMessageThreadEvent): void;
}

/**
 * The group event listener.
 *
 * For descriptions of callback methods in the listener, user A acts as the current user and user B serves as the peer user.
 */
export interface ChatGroupEventListener {
  /**
   * Occurs when a group invitation is received.
   *
   * For example, after user B sends user A a group invitation, user A receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   * - Param [inviter] The user ID of the inviter.
   * - Param [reason] The reason for invitation.
   */
  onInvitationReceived?(params: {
    groupId: string;
    inviter: string;
    groupName?: string;
    reason?: string;
  }): void;

  /**
   * Occurs when a join request is received.
   *
   * For example, after user A sends a join request to user B, user B receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   * - Param [applicant] The user ID of the applicant.
   * - Param [reason] The reason for requesting to join the group.
   */
  onRequestToJoinReceived?(params: {
    groupId: string;
    applicant: string;
    groupName?: string;
    reason?: string;
  }): void;
  /**
   * Occurs when a join request is accepted.
   *
   * For a group of the `PublicJoinNeedApproval` style, after user B accepts a join request from user A, user A receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   * - Param [accepter] The ID of the user that accepts the join request.
   */
  onRequestToJoinAccepted?(params: {
    groupId: string;
    accepter: string;
    groupName?: string;
  }): void;
  /**
   * Occurs when a join request is declined.
   *
   * For example, for a group of the `PublicJoinNeedApproval` style, after user B declines a join request from user A, user A receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   * - Param [decliner] The ID of the user that declines the join request.
   * - Param [reason] The reason for declining the join request.
   */
  onRequestToJoinDeclined?(params: {
    groupId: string;
    decliner: string;
    groupName?: string;
    reason?: string;
  }): void;
  /**
   * Occurs when a group invitation is accepted manually.
   *
   * For example, after user B manually accepts a group invitation from user A, user A receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   * - Param [invitee] The user ID of the invitee.
   * - Param [reason] The reason for accepting the group invitation.
   */
  onInvitationAccepted?(params: {
    groupId: string;
    invitee: string;
    reason?: string;
  }): void;
  /**
   * Occurs when a group invitation is declined.
   *
   * For example, after user B declines a group invitation from user A, user A receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [invitee] The user ID of the invitee.
   * - Param [reason] The reason for accepting the group invitation.
   */
  onInvitationDeclined?(params: {
    groupId: string;
    invitee: string;
    reason?: string;
  }): void;
  /**
   * Occurs when a member is removed from the group.
   *
   * The member removed from the group receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   */
  onUserRemoved?(params: { groupId: string; groupName?: string }): void;
  /**
   * Occurs when a group is destroyed.
   *
   * All members in the group receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [groupName] The group name.
   */
  onGroupDestroyed?(params: { groupId: string; groupName?: string }): void;
  /**
   * Occurs when the group invitation is accepted automatically.
   *
   * For example, after user B invites user A to join the group, as user A sets {@link ChatOptions#autoAcceptGroupInvitation} to `true`, the invitee joins the group automatically and receives this callback.
   *
   * @param params The parameter set.
   * - Param [groupId]			The group ID.
   * - Param [inviter]			The user ID of the inviter.
   * - Param [inviteMessage]    The invitation message.
   */
  onAutoAcceptInvitation?(params: {
    groupId: string;
    inviter: string;
    inviteMessage?: string;
  }): void;
  /**
   * Occurs when a member(s) is/are added to the mute list of the group.
   *
   * The members added to the mute list, the group owner, and the group admins, except the operator, receive this callback.
   *
   * A member, when muted, can still see group messages, but cannot send messages in the group. However, a user on the block list can neither see nor send group messages.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [mutes] The user ID(s) of member(s) that are muted.
   * - Param [muteExpire] Reserved parameter. The Unix timestamp when the mute expires. The unit is millisecond.
   */
  onMuteListAdded?(params: {
    groupId: string;
    mutes: Array<string>;
    muteExpire?: number;
  }): void;
  /**
   * Occurs when a member(s) is/are removed from the mute list of the group.
   *
   * The members removed from the mute list, the group owner, and the group admins, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [mutes] The user ID(s) of member(s) that is/are removed from the mute list.
   */
  onMuteListRemoved?(params: { groupId: string; mutes: Array<string> }): void;
  /**
   * Occurs when a member is set as an admin.
   *
   * The group owner, new admin, and other group admins receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [admin] The user ID of the member that is set as an admin.
   */
  onAdminAdded?(params: { groupId: string; admin: string }): void;
  /**
   * Occurs when the administrative privileges of an admin are removed.
   *
   * The group owner, the admin with administrative privileges removed, and other group admins, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [admin] The user ID of the admin whose administrative privileges are removed.
   */
  onAdminRemoved?(params: { groupId: string; admin: string }): void;
  /**
   * Occurs when the group ownership is transferred.
   *
   * The new group owner and previous group owner receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [newOwner] The user ID of the new group owner.
   * - Param [oldOwner] The user ID of the previous group owner.
   */
  onOwnerChanged?(params: {
    groupId: string;
    newOwner: string;
    oldOwner: string;
  }): void;
  /**
   * Occurs when a user joins a group.
   *
   * All members in the group, except the new member, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [member] The user ID of the new member.
   */
  onMemberJoined?(params: { groupId: string; member: string }): void;
  /**
   * Occurs when a member voluntarily leaves the group.
   *
   * All members in the group, except the member leaving the group, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [member] The user ID of the member leaving the group.
   */
  onMemberExited?(params: { groupId: string; member: string }): void;
  /**
   * Occurs when the group announcement is updated.
   *
   * All members in the group receive the callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [announcement] The new announcement.
   */
  onAnnouncementChanged?(params: {
    groupId: string;
    announcement: string;
  }): void;
  /**
   * Occurs when a shared file is added to the group.
   *
   * All members in the group receive the callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [sharedFile] The ID of the new shared file.
   */
  onSharedFileAdded?(params: { groupId: string; sharedFile: string }): void;
  /**
   * Occurs when a shared file is removed from a group.
   *
   * All members in the group receive the callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [fileId] The ID of the shared file that is deleted.
   */
  onSharedFileDeleted?(params: { groupId: string; fileId: string }): void;
  /**
   * Occurs when a group member(s) is/are added to the allow list.
   *
   * The member added to the allow list, the group owner, and group admins, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [members] The user ID(s) of members(s) that is/are added to the allow list of the group.
   */
  onAllowListAdded?(params: { groupId: string; members: Array<string> }): void;
  /**
   * Occurs when a group member(s) is/are removed from the allow list.
   *
   * The member removed from the allow list, the group owner, and group admins, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [members] The user ID(s) of member(s) that is/are removed from the allow list of the group.
   */
  onAllowListRemoved?(params: {
    groupId: string;
    members: Array<string>;
  }): void;
  /**
   * Occurs when all group members are muted or unmuted.
   *
   * All members in the group, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [groupId] The group ID.
   * - Param [isAllMuted] Whether all group members are muted.
   *   - `true`: Yes.
   *   - `false`: No.
   */
  onAllGroupMemberMuteStateChanged?(params: {
    groupId: string;
    isAllMuted: boolean;
  }): void;
}

/**
 * The contact update listener.
 *
 * It listens for contact changes, including adding or removing a friend and accepting and declining a friend request.
 *
 * For descriptions of callback methods in the listener, user A acts as the current user and user B serves as the peer user.
 */
export interface ChatContactEventListener {
  /**
   * Occurs when a friend request from the current user is accepted by the peer user.
   *
   * For example, after user B accepts a friend request from user A, user A receives this callback.
   *
   * @param userName The user ID of the user that accepts the friend request of the current user.
   */
  onContactAdded?(userName: string): void;
  /**
   * Occurs when a friend request from the current user is declined by the peer user.
   *
   * For example, after user B declines a friend request from user A, user A receives this callback.
   *
   * @param userName The user that declines the friend request from the current user.
   */
  onContactDeleted?(userName: string): void;
  /**
   * Occurs when a friend request is received by the current user.
   *
   * For example, after user A receives a friend request from user B, user A receives this callback.
   *
   * @param userName The user who initiates the friend request.
   * @param reason The invitation message.
   */
  onContactInvited?(userName: string, reason?: string): void;
  /**
   * Occurs when a friend request is accepted by the current user.
   *
   * For example, after user A accepts a friend request from user B, user A receives this callback.
   *
   * @param userName The user who initiates the friend request.
   */
  onFriendRequestAccepted?(userName: string): void;
  /**
   * Occurs when a friend request is declined by the current user.
   *
   * For example, after user A declines a friend request from user B, user A receives this callback.
   *
   * @param userName The user who initiates the friend request.
   */
  onFriendRequestDeclined?(userName: string): void;
}

/**
 * The chat room event listener.
 */
export interface ChatRoomEventListener {
  /**
   * Occurs when the chat room is destroyed.
   *
   * All members in the chat room receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [roomName] The chat room name.
   */
  onChatRoomDestroyed?(params: { roomId: string; roomName?: string }): void;
  /**
   * Occurs when a user joins the chat room.
   *
   * All members in the chat room, except the new member, receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [participant] The user ID of the new member.
   */
  onMemberJoined?(params: { roomId: string; participant: string }): void;
  /**
   * Occurs when a member voluntarily leaves the chat room.
   *
   * All members in the chat room, except the member leaving the chat room, receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [participant] The user ID of the member who leaves the chat room.
   */
  onMemberExited?(params: {
    roomId: string;
    participant: string;
    roomName?: string;
  }): void;
  /**
   *  Occurs when a member is removed from a chat room.
   *
   * The member removed from the chat room receives this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [roomName] The chat room name.
   * - Param [participant] The user ID of the member that is removed from a chat room.
   */
  onRemoved?(params: {
    roomId: string;
    participant?: string;
    roomName?: string;
  }): void;
  /**
   * Occurs when a member(s) is/are added to the mute list of the chat room.
   *
   * The members added to the mute list receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [mutes] The user ID(s) of muted member(s).
   * - Param [expireTime] Reserved parameter. The Unix timestamp when the mute duration expires.
   */
  onMuteListAdded?(params: {
    roomId: string;
    mutes: Array<string>;
    expireTime?: string;
  }): void;
  /**
   * Occurs when a chat room member(s) is/are removed from the mute list.
   *
   * The members removed from the mute list receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [mutes] The user ID(s) of unmuted member(s).
   */
  onMuteListRemoved?(params: { roomId: string; mutes: Array<string> }): void;
  /**
   * Occurs when a chat room member is set as an admin.
   *
   * The member set as a chat room admin receives this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [admin]  The user ID of the member who is set as an admin.
   */
  onAdminAdded?(params: { roomId: string; admin: string }): void;
  /**
   * Occurs when the administrative privileges of a chat room admin are removed.
   *
   * The admin whose administrative privileges are removed receives this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [admin] The user ID of the admin whose administrative privileges are removed.
   */
  onAdminRemoved?(params: { roomId: string; admin: string }): void;
  /**
   * Occurs when the chat room ownership is transferred.
   *
   * All members in the chat room receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [newOwner] The user ID of the new chat room owner.
   * - Param [oldOwner] The user ID of the previous chat room owner.
   */
  onOwnerChanged?(params: {
    roomId: string;
    newOwner: string;
    oldOwner: string;
  }): void;
  /**
   * Occurs when the chat room announcement changes.
   *
   * All members in the chat room receive the callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [announcement] The new announcement.
   */
  onAnnouncementChanged?(params: {
    roomId: string;
    announcement: string;
  }): void;
  /**
   * Occurs when a chat room member(s) is/are added to the allow list.
   *
   * The members added to the allow list receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [members] The member(s) added to the allow list of the chat room.
   */
  onAllowListAdded?(params: { roomId: string; members: Array<string> }): void;
  /**
   * Occurs when a chat room member(s) is/are removed from the allow list.
   *
   * The members removed from the allow list receive the callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [members] The member(s) removed from the allow list of the chat room.
   */
  onAllowListRemoved?(params: { roomId: string; members: Array<string> }): void;
  /**
   * Occurs when all members in the chat room are muted or unmuted.
   *
   * All members in the chat room, except the operator, receive this callback.
   *
   * @param params The parameter set.
   * - Param [roomId] The chat room ID.
   * - Param [isAllMuted] Whether all chat room members are muted.
   *   - `true`: Yes.
   *   - `false`: No.
   */
  onAllChatRoomMemberMuteStateChanged?(params: {
    roomId: string;
    isAllMuted: boolean;
  }): void;
}

/**
 * The presence state change listener.
 */
export interface ChatPresenceEventListener {
  /**
   * Occurs when the presence state of a subscribed user changes.
   *
   * @param list The new presence state of a subscribed user.
   */
  onPresenceStatusChanged(list: Array<ChatPresence>): void;
}

/**
 * The server listener.
 */
export interface ChatCircleServerListener {
  /**
   * Occurs when a server is destroyed.
   *
   * All members in the server, except the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - initiator: The initiator ID.
   */
  onServerDestroyed?(params: { serverId: string; initiator: string }): void;
  /**
   * Occurs when a server is updated.
   *
   * All members in the server, except the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - serverName: The server name.
   * - serverIconUrl: The server icon URL.
   * - serverDescription: The server description.
   * - serverCustom: The custom server extension parameter in string format.
   * - eventSenderId: The user ID of the member that updates the server.
   * - eventReceiveIds: The user ID(s) of the event recipient(s).
   * - timestamp: The Unix timestamp when the event occurs. The unit is millisecond.
   */
  onServerUpdated?(params: {
    serverId: string;
    serverName: string;
    serverDescription: string;
    serverCustom: string;
    serverIconUrl: string;
    eventSenderId: string;
    eventReceiveIds: Array<string>;
    timestamp: number;
  }): void;
  /**
   * Occurs when a user joins a server.
   *
   * All members in the server, except the new member, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - memberId: The user ID of the new member.
   */
  onMemberJoinedServer?(params: { serverId: string; memberId: string }): void;
  /**
   * Occurs when a members leaves a server.
   *
   * The server owner and moderators receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - memberId: The user ID of the members that leaves the server.
   */
  onMemberLeftServer?(params: { serverId: string; memberId: string }): void;
  /**
   * Occurs when a member(s) is/are removed from a server.
   *
   * The member(s) removed from the server, the server owner, and moderators, except the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - memberIds: The user ID(s) of the member(s) removed from the server.
   */
  onMemberRemovedFromServer?(params: {
    serverId: string;
    memberIds: string[];
  }): void;
  /**
   * Occurs when a user receives a server invitation.
   *
   * For example, after user B sends user A a server invitation, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - serverName: The server name.
   * - serverIconUrl: The server icon URL.
   * - serverDescription: The server description.
   * - serverCustom: The custom server extension parameter in string format.
   * - eventSenderId: The user ID of the event sender.
   * - eventReceiveIds: The user ID(s) of the event recipient(s).
   * - timestamp: The Unix timestamp when the event occurs. The unit is millisecond.
   */
  onReceiveServerInvitation?(params: {
    serverId: string;
    serverName: string;
    serverDescription: string;
    serverCustom: string;
    serverIconUrl: string;
    eventSenderId: string;
    eventReceiveIds: Array<string>;
    timestamp: number;
  }): void;
  /**
   * Occurs when a server invitation is accepted.
   *
   * For example, after user B accepts a server invitation from user A, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - invitee: The user ID of the invitee.
   */
  onServerInvitationBeAccepted?(params: {
    serverId: string;
    invitee: string;
  }): void;
  /**
   * Occurs when a server invitation is declined.
   *
   * For example, after user B declines a server invitation from user A, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - invitee: The user ID of the invitee.
   */
  onServerInvitationBeDeclined?(params: {
    serverId: string;
    invitee: string;
  }): void;
  /**
   * Occurs when the role of a server member is changed.
   *
   * All members in the server, except the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - memberId: The user ID of the server member whose role is changed.
   * - role: The new role of the server member.
   */
  onServerRoleAssigned?(params: {
    serverId: string;
    memberId: string;
    role: ChatCircleUserRole;
  }): void;
}

/**
 * The channel listener.
 */
export interface ChatCircleChannelListener {
  /**
   * Occurs when a channel is created.
   *
   * All users involved in channel creation receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - creator: The user ID of the channel creator.
   */
  onChannelCreated?(params: {
    serverId: string;
    channelId: string;
    creator: string;
  }): void;
  /**
   * Occurs when a channel is destroyed.
   *
   * All members in the channel, excluding the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - initiator: The user that destroys the channel.
   */
  onChannelDestroyed?(params: {
    serverId: string;
    channelId: string;
    initiator: string;
  }): void;
  /**
   * Occurs when a channel is updated.
   *
   * All members in the channel, excluding the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - channelName: The channel name.
   * - channelDescription: The channel description.
   * - initiator: The user that updates the channel.
   */
  onChannelUpdated?(params: {
    serverId: string;
    channelId: string;
    channelName: string;
    channelDescription: string;
    initiator: string;
  }): void;
  /**
   * Occurs when a user joins the channel.
   *
   * All members in the channel, except the new member, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - memberId: The user ID of the new member.
   */
  onMemberJoinedChannel?(params: {
    serverId: string;
    channelId: string;
    memberId: string;
  }): void;
  /**
   * Occurs when a member voluntarily leaves the channel.
   *
   * All members in the channel, except the one leaving the channel, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - memberId: The user ID of the member leaving the channel.
   */
  onMemberLeftChannel?(params: {
    serverId: string;
    channelId: string;
    memberId: string;
  }): void;
  /**
   * Occurs when a member is removed from the channel.
   *
   * The member that is removed from the channel receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - memberId: The user ID of the member that is removed from the channel.
   * - initiator: The user ID of the member that removes a member from the channel.
   */
  onMemberRemovedFromChannel?(params: {
    serverId: string;
    channelId: string;
    memberId: string;
    initiator: string;
  }): void;
  /**
   * Occurs when a user receives a channel invitation.
   *
   * For example, after user B sends user A a channel invitation, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - serverName: The server name.
   * - serverIcon: The server icon URL.
   * - channelId: The channel ID.
   * - channelName: The channel name.
   * - channelDescription: The channel description.
   * - inviter: The user ID of the inviter.
   */
  onReceiveChannelInvitation?(params: {
    serverId: string;
    serverName: string;
    serverIcon: string;
    channelId: string;
    channelName: string;
    channelDescription: string;
    inviter: string;
  }): void;
  /**
   * Occurs when a channel invitation is accepted.
   *
   * For example, after user B accepts a channel invitation from user A, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - invitee: The user ID of the invitee.
   */
  onChannelInvitationBeAccepted?(params: {
    serverId: string;
    channelId: string;
    invitee: string;
  }): void;
  /**
   * Occurs when a channel invitation is declined.
   *
   * For example, after user B declines a channel invitation from user A, user A receives this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - invitee: The user ID of the invitee.
   */
  onChannelInvitationBeDeclined?(params: {
    serverId: string;
    channelId: string;
    invitee: string;
  }): void;
  /**
   * Occurs when a channel member(s) is/are added to or removed from the mute list.
   *
   * The members whose mute status changes, the server owner, moderators, except the operator, receive this callback.
   *
   * @param params -
   * - serverId: The server ID.
   * - channelId: The channel ID.
   * - isMuted: Whether the channel member(s) is/are muted.
   * - memberIds: The user ID(s) of the member(s) whose mute status changes.
   */
  onMemberMuteChangeInChannel?(params: {
    serverId: string;
    channelId: string;
    isMuted: boolean;
    memberIds: string;
  }): void;
}
