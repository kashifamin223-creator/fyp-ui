"use client";

import EmployedQuestionnaire from "./EmployedQuestionnaire";

type Props = {
  onRecommend?: (videoId: string | null) => void;
};

export default function EmployedDashboard({ onRecommend }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-[#064E3B]">Employed Professionals Dashboard</h2>

      <p className="text-sm text-gray-600 mt-2">
        Complete the quick 9-question stress check for employed professionals and watch recommended motivational videos from famous personalities.
      </p>

      <div className="mt-6 w-full">
        <EmployedQuestionnaire onRecommend={onRecommend} />
      </div>
    </div>
  );
}
