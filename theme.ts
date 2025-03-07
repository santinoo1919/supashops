export const theme = {
  colors: {
    primary: "bg-primary hover:bg-primary-dark",
    secondary: "bg-secondary",
    surface: "bg-surface",
    surfaceSecondary: "bg-surface-secondary",
  },
  text: {
    title: "text-xl font-bold text-text",
    body: "text-base text-text-secondary",
    caption: "text-sm text-text-secondary",
  },
  layout: {
    card: "bg-surface rounded-xl border-2 border-primary-light h-[32rem]",
    cardImage: "h-48 w-full",
    cardContent: "p-4",
    services:
      "flex-row flex-wrap h-[36px] sm:h-auto md:h-[72px] overflow-hidden sm:overflow-visible md:overflow-hidden",
    serviceBadge: "bg-surface-secondary rounded-full m-1 px-3 py-1",
  },
  buttons: {
    primary: "bg-primary px-6 py-3 rounded-lg",
    secondary: "bg-secondary px-6 py-3 rounded-lg",
  },
} as const;
