const UNLOCK_KEY = "annabelle-protected-studies-v2";

export function checkStudyPassword(value: string) {
  const password = value.trim();
  if (password.length !== 7) return false;
  return password[0].toLowerCase() === "h" && password.slice(1) === "olly99";
}

export function hasUnlockedStudies() {
  try {
    return window.sessionStorage.getItem(UNLOCK_KEY) === "1";
  } catch {
    return false;
  }
}

export function unlockStudies() {
  try {
    window.sessionStorage.setItem(UNLOCK_KEY, "1");
  } catch {
    // Private mode can block sessionStorage; unlock still lasts for this view.
  }
}
