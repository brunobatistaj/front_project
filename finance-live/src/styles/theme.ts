export const themeClasses = {
    dark: {
        page: "bg-[#181A20] text-white",
        card: "bg-[#1E2329] border-[#2B3139]",
        secondaryText: "text-[#B7BDC6]",
        input:
            "bg-[#181A20] border-[#2B3139] text-white",
        header:
            "bg-[#181A20] border-[#2B3139]",
    },

    light: {
        page: "bg-[#F5F5F5] text-[#1E2329]",
        card: "bg-white border-[#EAECEF]",
        secondaryText: "text-[#707A8A]",
        input:
            "bg-white border-[#EAECEF] text-[#1E2329]",
        header:
            "bg-white border-[#EAECEF]",
    },
} as const;