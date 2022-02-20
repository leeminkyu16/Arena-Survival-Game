import { AccountDataService } from "../../../services/account_data_service";
import { SaveDataService } from "../../../services/save_data_service";

export function getPaginated(vueComponent, pageNumber, nPerPage) {
  return SaveDataService.getPaginated(vueComponent, pageNumber, nPerPage)
    .then((response) => {
      if (response.status === 200) {
        vueComponent.list = response.data;
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        AccountDataService.refresh(vueComponent).then(() => {
          SaveDataService.getPaginated(vueComponent, pageNumber, nPerPage).then(
            (response) => {
              if (response.status === 200) {
                vueComponent.list = response.data;
              }
            }
          );
        });
      }
    });
}

export function setNumOfSaves(vueComponent) {
  SaveDataService.getCount(vueComponent)
    .then((response) => {
      if (response.status === 200) {
        vueComponent.numOfSaves = Math.ceil(response.data);
      }
    })
    .catch(() => {
      AccountDataService.refresh(vueComponent).then(() => {
        SaveDataService.getCount(vueComponent).then((response) => {
          if (response.status === 200) {
            vueComponent.numOfSaves = Math.ceil(response.data);
          }
        });
      });
    });
}
