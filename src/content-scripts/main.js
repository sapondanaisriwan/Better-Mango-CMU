import { KeyExtensionStatus, settingKey } from "../data/storage-key";
import { injectAllChanges } from "./modules/options/optionChanges";
import { getAllStorage, getStorage } from "./modules/utils/storage";

let allData;

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  // will reload the page if key KeyExtensionStatus is changes
  if (changes[KeyExtensionStatus]) {
    window.location.reload();
    return;
  }

  allData = await getAllStorage(settingKey);

  if (!allData[KeyExtensionStatus]) {
    return;
  }

  injectAllChanges(allData);
});

const main = async () => {
  const extensionStatus = await getStorage(KeyExtensionStatus);
  if (!extensionStatus) {
    return;
  }

  allData = await getAllStorage(settingKey);
  injectAllChanges(allData);
};

main();
