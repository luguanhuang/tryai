import { ReactNode } from "react";
import { Configs } from "@/services/config";
import {
  AnalyticsManager,
  GoogleAnalyticsProvider,
  OpenPanelAnalyticsProvider,
  PlausibleAnalyticsProvider,
  VercelAnalyticsProvider,
} from "@/extensions/analytics";

export function getAnalyticsComponents(dbConfigs: Configs): {
  analyticsMetaTags: ReactNode;
  analyticsHeadScripts: ReactNode;
  analyticsBodyScripts: ReactNode;
} {
  const analytics = new AnalyticsManager();

  // google analytics
  if (dbConfigs.google_analytics_id) {
    analytics.addProvider(
      new GoogleAnalyticsProvider({ gaId: dbConfigs.google_analytics_id })
    );
  }

  // plausible
  if (dbConfigs.plausible_domain && dbConfigs.plausible_src) {
    analytics.addProvider(
      new PlausibleAnalyticsProvider({
        domain: dbConfigs.plausible_domain,
        src: dbConfigs.plausible_src,
      })
    );
  }

  // openpanel
  if (dbConfigs.openpanel_client_id) {
    analytics.addProvider(
      new OpenPanelAnalyticsProvider({
        clientId: dbConfigs.openpanel_client_id,
      })
    );
  }

  // vercel analytics
  // TODO: read config from db
  if (true) {
    analytics.addProvider(new VercelAnalyticsProvider({ mode: "auto" }));
  }

  return {
    analyticsMetaTags: analytics.getMetaTags(),
    analyticsHeadScripts: analytics.getHeadScripts(),
    analyticsBodyScripts: analytics.getBodyScripts(),
  };
}
