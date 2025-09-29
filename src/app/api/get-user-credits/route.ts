import { respData, respErr } from "@/lib/resp";
import { getRemainingCredits } from "@/services/credit";
import { getUserInfo } from "@/services/user";

export async function POST(req: Request) {
  try {
    const user = await getUserInfo();
    if (!user) {
      return respErr("no auth, please sign in");
    }

    const credits = await getRemainingCredits(user.id);

    return respData({ remainingCredits: credits });
  } catch (e) {
    console.log("get user credits failed:", e);
    return respErr("get user credits failed");
  }
}
