"use client";

import OldAgeQuestionnaire from "./OldAgeQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function OldAgeDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
      

      <div className="mt-6 w-full">
        <OldAgeQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
