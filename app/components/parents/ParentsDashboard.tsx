"use client";

import ParentsQuestionnaire from "./ParentsQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function ParentsDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#064E3B]">Parents Dashboard</h2>

      <p className="text-sm text-gray-600 mt-2">
        Complete the quick 9-question parenting stress check and watch recommended videos for support and inspiration.
      </p>

      <div className="mt-6 w-full">
        <ParentsQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
