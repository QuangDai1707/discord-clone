import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
    const profile = await initialProfile();
    // console.log("===========", profile);

    const server = await db.server.findFirst({
        where: {
            member: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        // console.log("===========", server);
        return redirect(`/servers/${server.id}`)
    }

    return <InitialModal />
}

export default SetupPage;