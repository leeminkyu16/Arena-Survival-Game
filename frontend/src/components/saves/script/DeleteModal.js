import { AccountDataService } from "../../../services/account_data_service";
import { SaveDataService } from "../../../services/save_data_service";

export function deleteSave(vueComponent, saveId) {
  SaveDataService.delete(vueComponent, saveId)
    .then((response) => {
      if (response.status === 200) {
        vueComponent.$root.$emit("saves-update-cards");
      }
    })
    .catch((error) => {
      if (error.response.status === 401) {
        AccountDataService.refresh(vueComponent).then(() => {
          SaveDataService.delete(vueComponent, saveId).then((response) => {
            if (response.status === 200) {
              vueComponent.$root.$emit("saves-update-cards");
            }
          });
        });
      }
    });
}
