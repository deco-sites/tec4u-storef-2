export default function Logo({ class: className = "" }: { class?: string }) {
  return (
    <svg
      class={className}
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* TEC */}
      <text
        x="10"
        y="42"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="42"
        font-weight="700"
        fill="#1F2937"
        letter-spacing="-2"
      >
        TEC
      </text>
      
      {/* 4 (highlight) */}
      <text
        x="90"
        y="42"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="42"
        font-weight="700"
        fill="#D946A6"
        letter-spacing="-2"
      >
        4
      </text>
      
      {/* U */}
      <text
        x="118"
        y="42"
        font-family="system-ui, -apple-system, sans-serif"
        font-size="42"
        font-weight="700"
        fill="#1F2937"
        letter-spacing="-2"
      >
        U
      </text>
    </svg>
  );
}
