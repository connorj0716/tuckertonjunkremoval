import { ImageResponse } from "next/og";

export const alt =
  "Tuckerton Junk Removal, same-day junk hauling in Tuckerton, NJ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #08182f 0%, #0d2444 55%, #153561 100%)",
          padding: "68px 72px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "#f59e0b",
            }}
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#08182f"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ color: "#ffffff", fontSize: 34, fontWeight: 800 }}
            >
              Tuckerton Junk Removal
            </span>
            <span
              style={{
                color: "#8db4df",
                fontSize: 19,
                letterSpacing: 2,
                marginTop: 4,
              }}
            >
              OCEAN COUNTY JUNK REMOVAL
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.08,
            }}
          >
            Junk Removal in
          </span>
          <span
            style={{
              color: "#fbbf24",
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.08,
            }}
          >
            Tuckerton, NJ
          </span>
          <span
            style={{
              color: "#dbe7f5",
              fontSize: 30,
              marginTop: 22,
            }}
          >
            Same-day hauling, upfront pricing, 200+ five-star reviews
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "#ffffff", fontSize: 38, fontWeight: 800 }}>
            (609) 703-2115
          </span>
          <span style={{ color: "#8db4df", fontSize: 24 }}>
            tuckertonjunkremoval.com
          </span>
        </div>
      </div>
    ),
    size
  );
}
