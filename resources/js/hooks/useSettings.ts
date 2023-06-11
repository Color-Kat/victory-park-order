/**
 * Return settings from div#settings.
 * Admin can change settings in JSON file
 */
export const useSettings = () => {
    const settingsString = document.querySelector('#settings')?.getAttribute('data-settings');
    const settings = JSON.parse(settingsString ?? "");
    return settings;
}