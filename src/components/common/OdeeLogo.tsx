type OdeeLogoProps = {
  size?: number
  className?: string
}

export function OdeeLogo({ size = 42, className = '' }: OdeeLogoProps) {
  const radius = 12
  const gap = 8
  const tile = 44
  const view = tile * 2 + gap

  return (
    <svg
      viewBox={`0 0 ${view} ${view}`}
      width={size}
      height={size}
      role="img"
      aria-label="ODEE logo"
      className={className}
    >
      <rect x="0" y="0" width={tile} height={tile} rx={radius} fill="#1E3A8A" />
      <rect x={tile + gap} y="0" width={tile} height={tile} rx={radius} fill="#38BDF8" />
      <rect x="0" y={tile + gap} width={tile} height={tile} rx={radius} fill="#10B981" />
      <rect x={tile + gap} y={tile + gap} width={tile} height={tile} rx={radius} fill="#F59E0B" />
      <text x={tile / 2} y={tile / 2 + 8} textAnchor="middle" fill="white" fontWeight="700" fontSize="26">
        O
      </text>
      <text x={tile + gap + tile / 2} y={tile / 2 + 8} textAnchor="middle" fill="white" fontWeight="700" fontSize="26">
        D
      </text>
      <text x={tile / 2} y={tile + gap + tile / 2 + 8} textAnchor="middle" fill="white" fontWeight="700" fontSize="26">
        E
      </text>
      <text
        x={tile + gap + tile / 2}
        y={tile + gap + tile / 2 + 8}
        textAnchor="middle"
        fill="white"
        fontWeight="700"
        fontSize="26"
      >
        E
      </text>
    </svg>
  )
}
