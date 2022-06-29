// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server";
import { exportModule } from "../../lib";

export default function handler(req, res) {
  return new NextResponse("T");
}

export const config = {
  runtime: "experimental-edge",
};
