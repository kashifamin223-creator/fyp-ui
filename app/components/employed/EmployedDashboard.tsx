"use client";

import EmployedQuestionnaire from "./EmployedQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function EmployedDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
      
      <div className="mt-6 w-full">
        <EmployedQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
