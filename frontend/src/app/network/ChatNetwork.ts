import { doGet, doPost } from "./Config";
import { CHATS, CUSTOMER, SEARCH_QUERY, SEEN, SELLER, SHOW, STORE } from "./Endpoint";

// order request below
export const GetAllChat = (token, query = null, type = null) => {
  const chatUrl = type == null ? `${CUSTOMER}${CHATS}` : `${SELLER}${CHATS}`;
  return query == null ? doGet(`${chatUrl}`, token) : doGet(`${chatUrl}?${SEARCH_QUERY}=${query}`, token);
};

export const SendMessage = (token, data, type = null) => {
  return type == null ? doPost(`${CUSTOMER}${CHATS}${STORE}`, data, token) : doPost(`${SELLER}${CHATS}${STORE}`, data, token);
}


export const UpdateSeenMessages = (token, messageData, type = null) => {
  return type == null ? doPost(`${CUSTOMER}${CHATS}${SEEN}`, messageData, token) : doPost(`${SELLER}${CHATS}${SEEN}`, messageData, token);
};

export const GetSingleChat = (token, chatId, type = null) => {
  return type == null ? doGet(`${CUSTOMER}${CHATS}${SHOW}/${chatId}`, token) : doGet(`${SELLER}${CHATS}${SHOW}/${chatId}`, token);
};
