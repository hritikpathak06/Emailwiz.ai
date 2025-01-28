import { prisma } from "@/configs/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const checkUser = async () => {
  try {
    const user = await currentUser();
    const loggedInUser = await prisma.user.findFirst({
      where: {
        clerkUserId: user?.id as string,
      },
    });
    if (loggedInUser) return;
    const updated_name = `${user?.firstName}-${user?.lastName}`;
    const newUser = await prisma.user.create({
      data: {
        name: updated_name,
        email: user?.emailAddresses[0].emailAddress as string,
        password: "sample@abc.com",
        profile_pic: user?.imageUrl,
        credit: 5,
      },
    });

    return newUser;
  } catch (error) {
    console.log("Somethign went wrong");
  }
};
