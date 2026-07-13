import { ImageResponse } from "next/og";

export const size = {
  width: 192,
  height: 192,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background:
            "linear-gradient(135deg, #7c3aed 0%, #c026d3 60%, #06b6d4 100%)",
          fontSize: 108,
          fontWeight: 900,
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        D
      </div>
    ),
    {
      ...size,
    }
  );
}
