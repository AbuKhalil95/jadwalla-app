import React from 'react';
import { connect } from 'react-redux';
import { Chat, Channel, ChannelList, Window } from 'stream-chat-react';
import { ChannelHeader, MessageList } from 'stream-chat-react';
import { MessageInput, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('gx5a64bj4ptz');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoic3dlZXQtZHJlYW0tNSJ9.xd1GiJNI_tTckyuSKDcbGltH8hnT1JlCe3LLNGvd44Q';

// custom channel preview component
class MyChannelPreview extends React.Component {
    render() {
        const { setActiveChannel, channel } = this.props;
        const unreadCount = channel.countUnread();

        return (
            <div className="channel_preview">
                <a href="#" onClick={(e) => setActiveChannel(channel, e)}>
                    {channel.data.name}
                </a>

                <span>
                    Unread messages: {unreadCount}
                </span>
            </div>
        );
    }
}

// a very minimalistic message component
class MyMessageComponent extends React.Component {
    render() {
        return <div><b>{this.props.message.user.name}</b> {this.props.message.text}</div>;
    }
}

chatClient.setUser(
    {
        id: 'sweet-dream-5',
        name: 'Sweet dream',
        image: 'https://getstream.io/random_png/?id=sweet-dream-5&name=Sweet+dream'
    },
    userToken,
);

const filters = { type: 'messaging', members: { $in: ['sweet-dream-5'] } };
const sort = { last_message_at: -1 };
const channels = chatClient.queryChannels(filters, sort);

const MyChat = props => (

    <Chat client={chatClient} theme={'messaging light'}>
        <ChannelList
            filters={filters}
            sort={sort}
            Preview={MyChannelPreview}
        />
        <Channel Message={MyMessageComponent}>
            <Window>
                <ChannelHeader />
                <MessageList />
                <MessageInput />
            </Window>
            <Thread />
        </Channel>
    </Chat>
);

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MyChat);