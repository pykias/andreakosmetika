"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Shield, ChartBar, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    
    // Save to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(allAccepted));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    
    // Initialize analytics/marketing scripts here
    initializeScripts(allAccepted);
    
    setShowBanner(false);
  };

  const handleAcceptSelected = () => {
    // Save to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    
    // Initialize only selected scripts
    initializeScripts(preferences);
    
    setShowBanner(false);
    setShowDetails(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    
    // Save to localStorage
    localStorage.setItem("cookieConsent", JSON.stringify(onlyNecessary));
    localStorage.setItem("cookieConsentDate", new Date().toISOString());
    
    setShowBanner(false);
  };

  const initializeScripts = (prefs: CookiePreferences) => {
    if (prefs.analytics) {
      // Initialize Google Analytics
      if (typeof window !== "undefined") {
        // Google Analytics 4
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
        document.head.appendChild(script);

        script.onload = () => {
          (window as any).dataLayer = (window as any).dataLayer || [];
          function gtag(...args: any[]) {
            (window as any).dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-XXXXXXXXXX", {
            anonymize_ip: true, // GDPR compliance
          });
        };
      }
    }

    if (prefs.marketing) {
      // Initialize Facebook Pixel, Google Ads, etc.
      // Add marketing scripts here
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Dark overlay */}
      <div className="fixed inset-0 bg-black/30 z-40" />
      
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <Card className="max-w-5xl mx-auto bg-white shadow-2xl">
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Cookie className="h-8 w-8 text-brand-brown" />
                <h2 className="text-2xl font-display font-semibold text-brand-text">
                  Nastavení cookies
                </h2>
              </div>
              <button
                onClick={handleRejectAll}
                className="text-brand-text-muted hover:text-brand-text"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-brand-text-light mb-6">
              Používáme cookies k zajištění správného fungování webu, analýze návštěvnosti a personalizaci obsahu. 
              Některé cookies jsou nezbytné pro fungování webu, jiné můžete odmítnout.
            </p>

            {!showDetails ? (
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-brand-brown hover:bg-brand-brown-dark text-white"
                >
                  Přijmout vše
                </Button>
                <Button
                  onClick={handleRejectAll}
                  variant="outline"
                  className="border-brand-brown text-brand-brown hover:bg-brand-beige-light"
                >
                  Pouze nezbytné
                </Button>
                <Button
                  onClick={() => setShowDetails(true)}
                  variant="ghost"
                  className="text-brand-text-light hover:text-brand-text"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Upravit nastavení
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Cookie categories */}
                <div className="space-y-3">
                  {/* Necessary cookies */}
                  <div className="flex items-start gap-3 p-4 bg-brand-bg-soft rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-green-600" />
                        <h3 className="font-semibold text-brand-text">
                          Nezbytné cookies
                        </h3>
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Vždy aktivní
                        </span>
                      </div>
                      <p className="text-sm text-brand-text-muted">
                        Tyto cookies jsou nezbytné pro základní fungování webu. 
                        Umožňují navigaci a používání základních funkcí.
                      </p>
                    </div>
                  </div>

                  {/* Analytics cookies */}
                  <div className="flex items-start gap-3 p-4 bg-brand-bg-soft rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <ChartBar className="h-4 w-4 text-blue-600" />
                        <h3 className="font-semibold text-brand-text">
                          Analytické cookies
                        </h3>
                      </div>
                      <p className="text-sm text-brand-text-muted">
                        Pomáhají nám pochopit, jak návštěvníci používají náš web. 
                        Data jsou anonymizovaná (Google Analytics).
                      </p>
                    </div>
                  </div>

                  {/* Marketing cookies */}
                  <div className="flex items-start gap-3 p-4 bg-brand-bg-soft rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <ChartBar className="h-4 w-4 text-purple-600" />
                        <h3 className="font-semibold text-brand-text">
                          Marketingové cookies
                        </h3>
                      </div>
                      <p className="text-sm text-brand-text-muted">
                        Používají se pro zobrazování relevantních reklam a 
                        remarketingové kampaně (Facebook Pixel, Google Ads).
                      </p>
                    </div>
                  </div>

                  {/* Preference cookies */}
                  <div className="flex items-start gap-3 p-4 bg-brand-bg-soft rounded-lg">
                    <input
                      type="checkbox"
                      checked={preferences.preferences}
                      onChange={(e) =>
                        setPreferences({ ...preferences, preferences: e.target.checked })
                      }
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Settings className="h-4 w-4 text-orange-600" />
                        <h3 className="font-semibold text-brand-text">
                          Preferenční cookies
                        </h3>
                      </div>
                      <p className="text-sm text-brand-text-muted">
                        Pamatují si vaše preference a nastavení pro lepší 
                        uživatelský zážitek při další návštěvě.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
                  <Button
                    onClick={handleAcceptSelected}
                    className="bg-brand-brown hover:bg-brand-brown-dark text-white"
                  >
                    Uložit nastavení
                  </Button>
                  <Button
                    onClick={() => setShowDetails(false)}
                    variant="ghost"
                    className="text-brand-text-light"
                  >
                    Zpět
                  </Button>
                </div>

                <p className="text-xs text-brand-text-muted">
                  Více informací najdete v našich{" "}
                  <a href="/zasady-ochrany-osobnich-udaju" className="underline">
                    Zásadách ochrany osobních údajů
                  </a>{" "}
                  a{" "}
                  <a href="/zasady-pouzivani-cookies" className="underline">
                    Zásadách používání cookies
                  </a>.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  );
}