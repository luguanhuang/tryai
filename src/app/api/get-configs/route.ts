import { respData, respErr } from "@/lib/resp";
import { getAllConfigs } from "@/services/config";

export async function POST() {
  try {
    const configs = await getAllConfigs();

    return respData(configs);
  } catch (e) {
    console.log("get config failed:", e);
    return respErr("get config failed");
  }
}
