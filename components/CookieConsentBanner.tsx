"use client";

import CookieConsent from "react-cookie-consent";

export default function CookieConsentBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="citadel_cookie_consent"
      expires={365}
      style={{
        background: "#0f172a",
        borderTop: "1px solid rgba(148,163,184,0.15)",
        padding: "16px 24px",
        alignItems: "center",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#2563eb",
        color: "#fff",
        borderRadius: "9999px",
        padding: "8px 20px",
        fontSize: "13px",
        fontWeight: 600,
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "1px solid rgba(148,163,184,0.3)",
        color: "#94a3b8",
        borderRadius: "9999px",
        padding: "8px 20px",
        fontSize: "13px",
        fontWeight: 600,
      }}
    >
      We use cookies to improve your experience. By continuing to browse, you agree to our use of cookies.{" "}
      <a href="/privacy" className="underline text-blue-400 hover:text-blue-300">
        Privacy Policy
      </a>
    </CookieConsent>
  );
}
