"use client";

import ParentsQuestionnaire from "./ParentsQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function ParentsDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
    
      <div className="mt-6 w-full">
        <ParentsQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
