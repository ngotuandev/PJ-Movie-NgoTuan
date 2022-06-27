export const USER = "USER";
export const REMEMBER_USER = "REMEMBER_USER";

export const localStoreService = {
  // *User
  setUserLocal: (data) => {
    let dataJson = JSON.stringify(data);
    localStorage.setItem(USER, dataJson);
  },
  getUserLocal: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
  removeUserLocal: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      localStorage.removeItem(USER);
    }
  },

  // * RememberUser
  setRememberUser: (data) => {
    let dataJson = JSON.stringify(data);
    localStorage.setItem(REMEMBER_USER, dataJson);
  },
  getRememberUser: () => {
    let dataJson = localStorage.getItem(REMEMBER_USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
};
