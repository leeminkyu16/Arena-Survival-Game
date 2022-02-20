import { mongoDB } from "../http-common";

export class SaveDataService {
  static async create(vueComponent, name, saveData, score) {
    const accessToken = vueComponent.$store.getters.accessToken;

    return mongoDB
      .post(
        `/save/`,
        {
          name: name,
          saveData: saveData,
          score: score,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          console.log("meme");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  static async getCount(vueComponent) {
    const accessToken = vueComponent.$store.getters.accessToken;

    return mongoDB.get(`/save/count`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  static async getAll(vueComponent) {
    const accessToken = vueComponent.$store.getters.accessToken;

    return mongoDB
      .get(`/save/all`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  static async getPaginated(vueComponent, pageNumber, nPerPage) {
    const accessToken = vueComponent.$store.getters.accessToken;

    return mongoDB.get(
      `/save/paginated?pageNumber=${pageNumber}&nPerPage=${nPerPage}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  }

  static async delete(vueComponent, id) {
    const accessToken = vueComponent.$store.getters.accessToken;
    console.log(accessToken);

    return mongoDB.delete(`/save/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }
}
