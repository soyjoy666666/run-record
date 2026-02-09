import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function RaceResultPage() {
  const supabase = await createClient();



  // 分割代入でdataとerrorを取得
  const { data, error } = await supabase
    .from('race_result')
    .select('*');
  // .eq('race_id', 1);

  if (error) {
    return <div>エラー: {error.message}</div>;
  }

  if (!data || data.length === 0) {
    return <div>レース結果が見つかりません</div>;
  }

  // 時間、分、秒に変換するヘルパー関数
  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    const parts = [];
    if (h > 0) parts.push(`${h}時間`);
    if (m > 0) parts.push(`${m}分`);
    parts.push(`${s}秒`);

    return parts.join(' ');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">レース結果一覧</h1>
      <ul className="space-y-2">
        {data.map((result, index) => (
          <li key={index} className="p-3 bg-gray-50 rounded border border-gray-200">
            <div className="font-semibold text-gray-900">Race ID: {result.race_id}</div>
            <div className="text-gray-900">Net Time: {formatTime(result.net_time)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
