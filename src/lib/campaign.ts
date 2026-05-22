export type CampaignState = "PRE_SAVE" | "AVAILABLE_NOW";

export const CAMPAIGN_STATE: CampaignState = "PRE_SAVE";

export const ALBUM_TITLE = "Give My Country Back";
export const RELEASE_DATE = "July 17, 2026";
export const PRESAVE_URL = "https://aaronlewis.ffm.to/givemycountryback-al.OWE";

export function ctaCopy(): string {
  return CAMPAIGN_STATE === "PRE_SAVE" ? "Pre-Save Now" : "Listen Now";
}

export function availabilityCopy(): string {
  return CAMPAIGN_STATE === "PRE_SAVE" ? "Available July 17" : "Available Now";
}
