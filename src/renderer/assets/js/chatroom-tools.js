import './48sdk/base-v2.8.0';
import './48sdk/nim-v2.8.0';
import Chatroom from './48sdk/chatroom-v2.8.0';
import LiveApi from "./live-api";

class ChatRoomTools {
    /**
     *
     * @param options
     * @returns {Promise<any>}
     */
    static chatroom(options){
        return new Promise((resolve, reject) => {
            LiveApi.chatRoomToken().then(responseBody => {
                console.log(options);
                const chatroom = new Chatroom({
                    appKey:'632feff1f4c838541ab75195d1ceb3fa',      //从官网公演直播网页代码获取
                    account:responseBody.account,
                    token:responseBody.token,
                    chatroomId:options.roomId,
                    chatroomAddresses:[
                        // '127.0.0.1:7272',
                        'weblink04.netease.im:443',
                        /*'',*/
                    ],
                    onconnect:options.onConnect,
                    onerror:options.onError,
                    onwillreconnect:options.onWillConnnect,
                    ondisconnect:options.onDisconnect,
                    // // 消息
                    onmsgs:options.onMessage
                });
                resolve(chatroom);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

export default ChatRoomTools;