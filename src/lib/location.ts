const OFFICE_QUERY =
  "18 office park lantai 22 suite e,f,g. Jl. Tb Simatupang Kebagusan, Pasar Minggu, Jakarta Selatan, DKI JAkarta 12520";

export const officeLocation = {
  addressMultiline:
    "18 office park lantai 22 suite e,f,g. Jl. Tb Simatupang Kebagusan, Pasar Minggu, Jakarta Selatan, DKI JAkarta 12520",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_QUERY)}`,
  mapsEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(OFFICE_QUERY)}&z=16&output=embed`,
} as const;
