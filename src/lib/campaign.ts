export type CampaignState = "PRE_SAVE" | "AVAILABLE_NOW";

export const CAMPAIGN_STATE: CampaignState = "PRE_SAVE";

export const ALBUM_TITLE = "Give My Country Back";
export const RELEASE_DATE = "July 10, 2026";
export const PRESAVE_URL = "https://aaronlewis.lnk.to/TheHillWE"; // Placeholder -- BMLG to provide correct GMCB pre-save link

export function ctaCopy(): string {
  return CAMPAIGN_STATE === "PRE_SAVE" ? "Pre-Save Now" : "Listen Now";
}

export function availabilityCopy(): string {
  return CAMPAIGN_STATE === "PRE_SAVE" ? "Available July 10" : "Available Now";
}
