import { AccountDataService } from "../../../services/account_data_service";

export function createAccount(vueComponent, username, password) {
  AccountDataService.create(vueComponent, username, password).then(() => {
    AccountDataService.refresh(vueComponent);
  });
}
