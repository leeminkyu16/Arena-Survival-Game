import { mongoDB } from "../http-common";

class AccountDataService {
  static async create(vueComponent, username, password) {
    return mongoDB
      .post(
        `/account/`,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 201) {
          vueComponent.$store.commit("setLastLoginSuccess", true);
          // vueComponent.$store.commit("setAccessToken", response.data.accessToken);
        } else {
          vueComponent.$store.commit("setLastLoginSuccess", false);
        }
      })
      .catch(() => {
        vueComponent.$store.commit("setLastLoginSuccess", false);
      });
  }

  static async login(vueComponent, username, password) {
    return mongoDB
      .post(
        `/account/login`,
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          vueComponent.$store.commit("setLastLoginSuccess", true);
          // vueComponent.$store.commit("setAccessToken", response.data.accessToken);
        } else {
          vueComponent.$store.commit("setLastLoginSuccess", false);
        }
      })
      .catch(() => {
        vueComponent.$store.commit("setLastLoginSuccess", false);
      });
  }

  static async refresh(vueComponent) {
    return mongoDB
      .post(
        `/account/refresh`,
        {},
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          vueComponent.$store.commit(
            "setAccessToken",
            response.data.accessToken
          );
        } else {
          vueComponent.$store.commit("setAccessToken", "");
        }
      })
      .catch(() => {
        vueComponent.$store.commit("setAccessToken", "");
      });
  }

  static async logout(vueComponent) {
    const accessToken = vueComponent.$store.state.account.accessToken;

    return mongoDB
      .post(
        `/account/logout`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.status === 200) {
          vueComponent.$store.commit("setLastLoginSuccess", false);
          vueComponent.$store.commit("setAccessToken", "");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          AccountDataService.refresh(vueComponent).then(() => {
            mongoDB
              .post(
                `/account/logout`,
                {},
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  },
                  withCredentials: true,
                }
              )
              .then((response) => {
                if (response.status === 200) {
                  vueComponent.$store.commit("setLastLoginSuccess", false);
                  vueComponent.$store.commit("setAccessToken", "");
                }
              });
          });
        }
      });
  }
}

export { AccountDataService };
