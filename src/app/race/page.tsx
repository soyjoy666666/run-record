import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type RaceResultWithRace = {
  net_time: number;
  race_id: number;
  member_id: number;
  created_at: string;
  race: {
    name: string;
    held_at: string | null;
  };
};

export default async function RaceResultPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('race_result')
    .select(`
      net_time,
      race_id,
      member_id,
      created_at,
      race:race_info!inner ( name, held_at )
    `)
    .order('created_at', { ascending: false })

  const results = data as RaceResultWithRace[] | null;

  if (error) {
    return <div>エラー: {error.message}</div>;
  }

  if (!results || results.length === 0) {
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
      <table className="min-w-full border border-gray-200 bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-700 border-b">開催日</th>
            <th className="px-4 py-2 text-left text-gray-700 border-b">大会名</th>
            <th className="px-4 py-2 text-left text-gray-700 border-b">記録</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index} className="odd:bg-gray-50">
              <td className="px-4 py-2 border-b text-gray-900">
                {result.race.held_at 
                  ? new Date(result.race.held_at).toLocaleDateString('ja-JP') 
                  : '未定'}
              </td>
              <td className="px-4 py-2 border-b text-gray-900">{result.race.name}</td>
              <td className="px-4 py-2 border-b text-gray-900">{formatTime(result.net_time)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
