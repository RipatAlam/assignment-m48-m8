import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const dynamic = "force-dynamic"; // prevents build-time execution
export const runtime = "nodejs"; // ensures Node environment

export const { POST, GET } = toNextJsHandler(auth);