const ApiKey = import.meta.env.VITE_apiKey;
const AuthDomain = import.meta.env.VITE_authDomain;
const ProjectId = import.meta.env.VITE_projectId;
const StorageBucket = import.meta.env.VITE_storageBucket;
const MessagingSenderId = import.meta.env.VITE_messagingSenderId;
const AppId = import.meta.env.VITE_appId;
const appInfo = {
  ApiKey,
  AuthDomain,
  ProjectId,
  StorageBucket,
  MessagingSenderId,
  AppId,
};
export default appInfo;
