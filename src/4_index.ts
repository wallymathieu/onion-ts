import * as App from "./2_app";
import * as Infra from "./3_infra";

// 4. inject dependencies
export function add(y: number) {
  const apiUrl = Infra.getConfigurationUrl();
  return App.add(() => Infra.getX(apiUrl), y);
}
