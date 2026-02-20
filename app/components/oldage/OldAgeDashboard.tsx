"use client";

import OldAgeQuestionnaire from "./OldAgeQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function OldAgeDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#064E3B]">Old Age Dashboard</h2>

      <p className="text-sm text-gray-600 mt-2">
        Complete the quick 9-question wellbeing check for older adults and watch recommended calming and inspirational videos.
      </p>

      <div className="mt-6 w-full">
        <OldAgeQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
