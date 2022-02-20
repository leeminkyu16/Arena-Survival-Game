import { AccountDataService } from "../../../services/account_data_service";

export function login(vueComponent, username, password) {
  AccountDataService.login(vueComponent, username, password).then(() => {
    AccountDataService.refresh(vueComponent);
  });
}
