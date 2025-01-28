"use server";

import { chatgpt_response_generator } from "@/configs/openIAI";
import { prisma } from "@/configs/prisma";

export const generate_ai_response = async ({
  prompt,
  userEmail,
  userClerkId,
  tid,
}: {
  prompt: string;
  userEmail: string | null;
  userClerkId: string | null;
  tid: string;
}) => {
  if (!prompt || !userEmail || !userClerkId || !tid) {
    throw new Error("Missing required fields in the payload");
  }

  console.log("Prompt==>>", prompt);
  console.log("Email==>> ", userEmail);
  console.log("ClerkId==>>: ", userClerkId);
  console.log("Tid==>> ", tid);

  try {
    const data = await chatgpt_response_generator(prompt);
    const newTemplate = await prisma.emailTemplates.create({
      data: {
        clerkUserId: userClerkId as string,
        email: userEmail as string,
        design: data,
        tid,
      },
    });

    return newTemplate;
  } catch (error) {
    throw new Error("Something went wrong while generating the AI response.");
  }
};

export const getAllTemplates = async () => {
  try {
    const data = await prisma.emailTemplates.findMany();

    return data;
  } catch (error) {
    console.log("Something happend wrong");
  }
};

export const getSingleTemplate = async (templateId: any) => {
  try {
    const data = await prisma.emailTemplates.findFirst({
      where: {
        tid: templateId as any,
      },
    });
    return data;
  } catch (error) {
    console.log("Something happend wrong");
  }
};
