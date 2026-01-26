/**
 * アプリケーション全体で使用する色設定
 * 淡い黄緑を基調としたカラーパレット
 */
export const colors = {
  // 背景グラデーション
  background: {
    light: {
      start: "from-green-50",
      mid: "via-green-100",
      end: "to-emerald-100",
    },
    dark: {
      start: "from-green-950",
      mid: "via-green-900",
      end: "to-emerald-900",
    },
    gradient: "bg-gradient-to-br",
  },
  
  // テキストカラー
  text: {
    primary: "text-green-900 dark:text-green-50",
    secondary: "text-green-600 dark:text-green-400",
    muted: "text-green-600/80 dark:text-green-300/80",
  },
  
  // グラデーションテキスト
  gradientText: {
    primary: "bg-gradient-to-r from-green-500 via-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent",
    secondary: "bg-gradient-to-r from-emerald-500 via-green-400 via-emerald-400 to-green-500 bg-clip-text text-transparent",
  },
  
  // ボタン
  button: {
    gradient: "bg-gradient-to-r from-green-500 to-emerald-500",
    shadow: "shadow-green-500/50",
    hoverShadow: "hover:shadow-green-500/70",
  },
  
  // ボーダー
  border: {
    light: "border-green-200 dark:border-green-800",
    card: "border-green-200 dark:border-green-700",
    input: "border-green-300 dark:border-green-700",
    focus: "focus:border-green-500",
  },
  
  // 背景（カードなど）
  card: {
    background: "bg-white/70 dark:bg-green-900/70",
    item: "bg-green-50 dark:bg-green-900",
  },
  
  // 入力フィールド
  input: {
    background: "bg-white dark:bg-green-800",
    text: "text-green-700 dark:text-green-100",
    focusRing: "focus:ring-green-200",
  },
  
  // アクセント
  accent: {
    glow: "from-green-400/20 via-transparent to-emerald-400/20",
  },
} as const;
