import { AccountDataService } from "../../../services/account_data_service";

export function logout(vueComponent) {
  AccountDataService.logout(vueComponent);
}
