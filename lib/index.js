export const exportModule =
  process.env.NEXT_RUNTIME === "nodejs"
    ? await import("@clerk/nextjs/api")
    : await import("@clerk/nextjs/edge-middleware");
