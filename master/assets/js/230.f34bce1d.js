(window.webpackJsonp=window.webpackJsonp||[]).push([[230],{805:function(e,n,t){"use strict";t.r(n);var s=t(1),o=Object(s.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"p2p-multiplex-connection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p2p-multiplex-connection"}},[e._v("#")]),e._v(" P2P Multiplex Connection")]),e._v(" "),t("h2",{attrs:{id:"mconnection"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mconnection"}},[e._v("#")]),e._v(" MConnection")]),e._v(" "),t("p",[t("code",[e._v("MConnection")]),e._v(" is a multiplex connection that supports multiple independent streams\nwith distinct quality of service guarantees atop a single TCP connection.\nEach stream is known as a "),t("code",[e._v("Channel")]),e._v(" and each "),t("code",[e._v("Channel")]),e._v(" has a globally unique "),t("em",[e._v("byte id")]),e._v(".\nEach "),t("code",[e._v("Channel")]),e._v(" also has a relative priority that determines the quality of service\nof the "),t("code",[e._v("Channel")]),e._v(" compared to other "),t("code",[e._v("Channel")]),e._v("s.\nThe "),t("em",[e._v("byte id")]),e._v(" and the relative priorities of each "),t("code",[e._v("Channel")]),e._v(" are configured upon\ninitialization of the connection.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("MConnection")]),e._v(" supports three packet types:")]),e._v(" "),t("ul",[t("li",[e._v("Ping")]),e._v(" "),t("li",[e._v("Pong")]),e._v(" "),t("li",[e._v("Msg")])]),e._v(" "),t("h3",{attrs:{id:"ping-and-pong"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ping-and-pong"}},[e._v("#")]),e._v(" Ping and Pong")]),e._v(" "),t("p",[e._v("The ping and pong messages consist of writing a single byte to the connection; 0x1 and 0x2, respectively.")]),e._v(" "),t("p",[e._v("When we haven't received any messages on an "),t("code",[e._v("MConnection")]),e._v(" in time "),t("code",[e._v("pingTimeout")]),e._v(", we send a ping message.\nWhen a ping is received on the "),t("code",[e._v("MConnection")]),e._v(", a pong is sent in response only if there are no other messages\nto send and the peer has not sent us too many pings (TODO).")]),e._v(" "),t("p",[e._v("If a pong or message is not received in sufficient time after a ping, the peer is disconnected from.")]),e._v(" "),t("h3",{attrs:{id:"msg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#msg"}},[e._v("#")]),e._v(" Msg")]),e._v(" "),t("p",[e._v("Messages in channels are chopped into smaller "),t("code",[e._v("msgPacket")]),e._v("s for multiplexing.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBtc2dQYWNrZXQgc3RydWN0IHsKIENoYW5uZWxJRCBieXRlCiBFT0YgICAgICAgYnl0ZSAvLyAxIG1lYW5zIG1lc3NhZ2UgZW5kcyBoZXJlLgogQnl0ZXMgICAgIFtdYnl0ZQp9Cg=="}}),e._v(" "),t("p",[e._v("The "),t("code",[e._v("msgPacket")]),e._v(" is serialized using "),t("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proto3"),t("OutboundLink")],1),e._v(".\nThe received "),t("code",[e._v("Bytes")]),e._v(" of a sequential set of packets are appended together\nuntil a packet with "),t("code",[e._v("EOF=1")]),e._v(" is received, then the complete serialized message\nis returned for processing by the "),t("code",[e._v("onReceive")]),e._v(" function of the corresponding channel.")]),e._v(" "),t("h3",{attrs:{id:"multiplexing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiplexing"}},[e._v("#")]),e._v(" Multiplexing")]),e._v(" "),t("p",[e._v("Messages are sent from a single "),t("code",[e._v("sendRoutine")]),e._v(", which loops over a select statement and results in the sending\nof a ping, a pong, or a batch of data messages. The batch of data messages may include messages from multiple channels.\nMessage bytes are queued for sending in their respective channel, with each channel holding one unsent message at a time.\nMessages are chosen for a batch one at a time from the channel with the lowest ratio of recently sent bytes to channel priority.")]),e._v(" "),t("h2",{attrs:{id:"sending-messages"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sending-messages"}},[e._v("#")]),e._v(" Sending Messages")]),e._v(" "),t("p",[e._v("There are two methods for sending messages:")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAobSBNQ29ubmVjdGlvbikgU2VuZChjaElEIGJ5dGUsIG1zZyBpbnRlcmZhY2V7fSkgYm9vbCB7fQpmdW5jIChtIE1Db25uZWN0aW9uKSBUcnlTZW5kKGNoSUQgYnl0ZSwgbXNnIGludGVyZmFjZXt9KSBib29sIHt9Cg=="}}),e._v(" "),t("p",[t("code",[e._v("Send(chID, msg)")]),e._v(" is a blocking call that waits until "),t("code",[e._v("msg")]),e._v(" is successfully queued\nfor the channel with the given id byte "),t("code",[e._v("chID")]),e._v(". The message "),t("code",[e._v("msg")]),e._v(" is serialized\nusing the "),t("code",[e._v("tendermint/go-amino")]),e._v(" submodule's "),t("code",[e._v("WriteBinary()")]),e._v(" reflection routine.")]),e._v(" "),t("p",[t("code",[e._v("TrySend(chID, msg)")]),e._v(" is a nonblocking call that queues the message msg in the channel\nwith the given id byte chID if the queue is not full; otherwise it returns false immediately.")]),e._v(" "),t("p",[t("code",[e._v("Send()")]),e._v(" and "),t("code",[e._v("TrySend()")]),e._v(" are also exposed for each "),t("code",[e._v("Peer")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"peer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#peer"}},[e._v("#")]),e._v(" Peer")]),e._v(" "),t("p",[e._v("Each peer has one "),t("code",[e._v("MConnection")]),e._v(" instance, and includes other information such as whether the connection\nwas outbound, whether the connection should be recreated if it closes, various identity information about the node,\nand other higher level thread-safe data used by the reactors.")]),e._v(" "),t("h2",{attrs:{id:"switch-reactor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#switch-reactor"}},[e._v("#")]),e._v(" Switch/Reactor")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("Switch")]),e._v(" handles peer connections and exposes an API to receive incoming messages\non "),t("code",[e._v("Reactors")]),e._v(". Each "),t("code",[e._v("Reactor")]),e._v(" is responsible for handling incoming messages of one\nor more "),t("code",[e._v("Channels")]),e._v(". So while sending outgoing messages is typically performed on the peer,\nincoming messages are received on the reactor.")]),e._v(" "),t("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gRGVjbGFyZSBhIE15UmVhY3RvciByZWFjdG9yIHRoYXQgaGFuZGxlcyBtZXNzYWdlcyBvbiBNeUNoYW5uZWxJRC4KdHlwZSBNeVJlYWN0b3Igc3RydWN0e30KCmZ1bmMgKHJlYWN0b3IgTXlSZWFjdG9yKSBHZXRDaGFubmVscygpIFtdKkNoYW5uZWxEZXNjcmlwdG9yIHsKICAgIHJldHVybiBbXSpDaGFubmVsRGVzY3JpcHRvcntDaGFubmVsRGVzY3JpcHRvcntJRDpNeUNoYW5uZWxJRCwgUHJpb3JpdHk6IDF9fQp9CgpmdW5jIChyZWFjdG9yIE15UmVhY3RvcikgUmVjZWl2ZShjaElEIGJ5dGUsIHBlZXIgKlBlZXIsIG1zZ0J5dGVzIFtdYnl0ZSkgewogICAgciwgbiwgZXJyIDo9IGJ5dGVzLk5ld0J1ZmZlcihtc2dCeXRlcyksIG5ldyhpbnQ2NCksIG5ldyhlcnJvcikKICAgIG1zZ1N0cmluZyA6PSBSZWFkU3RyaW5nKHIsIG4sIGVycikKICAgIGZtdC5QcmludGxuKG1zZ1N0cmluZykKfQoKLy8gT3RoZXIgUmVhY3RvciBtZXRob2RzIG9taXR0ZWQgZm9yIGJyZXZpdHkKLi4uCgpzd2l0Y2ggOj0gTmV3U3dpdGNoKFtdUmVhY3RvcntNeVJlYWN0b3J7fX0pCgouLi4KCi8vIFNlbmQgYSByYW5kb20gbWVzc2FnZSB0byBhbGwgb3V0Ym91bmQgY29ubmVjdGlvbnMKZm9yIF8sIHBlZXIgOj0gcmFuZ2Ugc3dpdGNoLlBlZXJzKCkuTGlzdCgpIHsKICAgIGlmIHBlZXIuSXNPdXRib3VuZCgpIHsKICAgICAgICBwZWVyLlNlbmQoTXlDaGFubmVsSUQsICZxdW90O0hlcmUncyBhIHJhbmRvbSBtZXNzYWdlJnF1b3Q7KQogICAgfQp9Cg=="}})],1)}),[],!1,null,null,null);n.default=o.exports}}]);