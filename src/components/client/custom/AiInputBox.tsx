"use client";

import { generate_ai_response } from "@/action/AiResponse";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import data from "../../../lib/prompt";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface AiInputBoxProps {
  user: {
    id: string | null;
    email: string | null;
  } | null;
}

const AiInputBox: React.FC<AiInputBoxProps> = ({ user }) => {
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  console.log("User===>> ", user);

  const handleGenerateResponse = async () => {
    const prompt = `${data.EMAIL_PROMPT}\n${userInput}`;

    if (!prompt || !user?.email || !user?.id) {
      alert("Invalid payload data");
      return;
    }

    const payload = {
      prompt,
      userEmail: user?.email ?? null,
      userClerkId: user?.id ?? null,
      tid: uuidv4(),
    };

    try {
      setLoading(true);
      const response = await generate_ai_response(payload);
      console.log("AI Response:", response);
      setUserInput("");
    } catch (error) {
      console.error("Error generating AI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-5">
      <Label className="mb-4">Provide the details</Label>
      <Textarea
        placeholder="Enter Your Prompt"
        className="text-md m"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Button
        className="mt-7 w-full"
        disabled={!userInput || loading}
        onClick={handleGenerateResponse}
      >
        {loading ? "Generating..." : "Generate"}
      </Button>
    </div>
  );
};

export default AiInputBox;
