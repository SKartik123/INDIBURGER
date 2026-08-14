const IndiBurgerLogo = ({ size = 'md' }) => {
  const sizeMap = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  }

  return (
    <svg
      viewBox="0 0 200 200"
      className={`${sizeMap[size]} inline-block`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle Background */}
      <circle cx="100" cy="100" r="95" fill="#FFA500" stroke="#DC2626" strokeWidth="3" />

      {/* Inner Circle */}
      <circle cx="100" cy="100" r="85" fill="#FFFFFF" />

      {/* Top Bun */}
      <ellipse cx="100" cy="60" rx="45" ry="20" fill="#D2691E" stroke="#8B4513" strokeWidth="2" />
      <path d="M 55 60 Q 55 50 100 45 Q 145 50 145 60" fill="#DEB887" />
      <circle cx="70" cy="50" r="3" fill="#CD853F" />
      <circle cx="90" cy="48" r="3" fill="#CD853F" />
      <circle cx="110" cy="48" r="3" fill="#CD853F" />
      <circle cx="130" cy="50" r="3" fill="#CD853F" />

      {/* Lettuce */}
      <path d="M 55 75 Q 55 70 100 68 Q 145 70 145 75" fill="#228B22" stroke="#1a6b1a" strokeWidth="1" />
      <path d="M 60 72 Q 62 68 65 72" fill="#32CD32" opacity="0.7" />
      <path d="M 135 72 Q 137 68 140 72" fill="#32CD32" opacity="0.7" />

      {/* Patty */}
      <rect x="55" y="80" width="90" height="18" rx="3" fill="#8B4513" stroke="#654321" strokeWidth="2" />
      <circle cx="75" cy="89" r="2" fill="#A0522D" opacity="0.6" />
      <circle cx="100" cy="89" r="2" fill="#A0522D" opacity="0.6" />
      <circle cx="125" cy="89" r="2" fill="#A0522D" opacity="0.6" />

      {/* Cheese */}
      <rect x="55" y="98" width="90" height="12" rx="2" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />

      {/* Tomato */}
      <circle cx="75" cy="115" r="8" fill="#FF4500" stroke="#DC143C" strokeWidth="1" />
      <circle cx="125" cy="115" r="8" fill="#FF4500" stroke="#DC143C" strokeWidth="1" />

      {/* Bottom Bun */}
      <ellipse cx="100" cy="140" rx="45" ry="22" fill="#D2691E" stroke="#8B4513" strokeWidth="2" />
      <path d="M 55 140 Q 55 155 100 160 Q 145 155 145 140" fill="#DEB887" />

      {/* Text */}
      <text
        x="100"
        y="185"
        textAnchor="middle"
        fontSize="16"
        fontWeight="bold"
        fill="#DC2626"
        fontFamily="Arial, sans-serif"
      >
        IndiBurger
      </text>
    </svg>
  )
}

export default IndiBurgerLogo
