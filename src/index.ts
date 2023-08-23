import { shortenWith1pt } from './shorteningServices/one-pt'
import { shortenWithCleanUri } from './shorteningServices/cleanuri'
import { shortenWithIsgd, IsgdParamsType } from './shorteningServices/isgd'
import {shortenWithShrtcode } from './shorteningServices/shrtcode'

export type ShorteningService = "1pt" | "cleanuri" | "isgd" | "shrtcode";
type ShorteningFunction = (
  url: string,
  customShort?: string,
  format?: IsgdParamsType["format"],
  logstats?: boolean
) => Promise<string>;

const shortenWithService: Record<ShorteningService, ShorteningFunction> = {
  "1pt": shortenWith1pt,
  cleanuri: shortenWithCleanUri,
  isgd: shortenWithIsgd,
  shrtcode: shortenWithShrtcode,
};

export async function shortenUrl(
  url: string,
  service: ShorteningService = "isgd",
  customShort?: string
): Promise<string> {
  const shortenFunction = shortenWithService[service];

  if (shortenFunction) {
    return shortenFunction(url, customShort);
  }

  throw new Error("Unsupported shortening service");
}
