import { Icon } from "../common/Icon";
import loader from "../../assets/loading.svg";
import ReactMarkdown from "react-markdown";
import { chatMessagesState, messageLoaderState } from "../../store/chats/chat";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { showSideBarState } from "../../store/behaviour";

export const ChatBox = () => {
  const showSideBar = useRecoilValue(showSideBarState);
  const chatMessages = useRecoilValue(chatMessagesState);
  const messageLoader = useRecoilValue(messageLoaderState);
  useEffect(() => {
    console.log(chatMessages);
  }, [chatMessages]);

  return (
    <>
      <div
        id="msgDiv"
        className={`${
          showSideBar ? "max-w-10/12 w-10/12" : "max-w-8/12 w-8/12"
        } max-h-[73vh] mx-auto justify-end overflow-y-auto custom-scrollbar`}
      >
        {chatMessages
          ? chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex my-8 ${
                  message.role === "User" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    message.role === "User"
                      ? "bg-purple-500 text-right w-fit"
                      : "bg-stone-700"
                  } text-white p-2 rounded-2xl w-10/12  overflow-x-auto custom-scrollbar `}
                >
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            ))
          : null}
        {messageLoader && (
          <div className="">
            <Icon src={loader} height={"h-6"} width={"w-6"} />
          </div>
        )}
      </div>
    </>
  );
};
