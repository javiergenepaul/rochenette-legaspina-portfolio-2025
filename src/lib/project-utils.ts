const THUMB_GRADIENTS: Record<string, string> = {
  "from-red-700 to-red-400": "linear-gradient(135deg,#b71c1c,#ef5350)",
  "from-rose-800 to-red-500": "linear-gradient(135deg,#880e2e,#D32F2F)",
  "from-red-900 to-orange-600": "linear-gradient(135deg,#D32F2F,#e65100)",
  "from-purple-900 to-red-700": "linear-gradient(135deg,#6a1b9a,#D32F2F)",
  "from-red-700 to-pink-700": "linear-gradient(135deg,#D32F2F,#880e4f)",
};

export function thumbBg(gradient: string): string {
  return THUMB_GRADIENTS[gradient] ?? "linear-gradient(135deg,#D32F2F,#b71c1c)";
}
