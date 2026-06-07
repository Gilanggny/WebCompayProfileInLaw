module.exports = [
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/company.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "company",
    ()=>company
]);
const company = {
    name: "Ultimate Solution",
    suffix: "Partners",
    fullName: "Ultimate Solution Partners",
    initials: "US",
    logoSrc: "/logo.png",
    tagline: "Keadilan · Integritas · Keunggulan",
    shortDescription: "Firma hukum terpercaya"
};
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/company.ts [app-ssr] (ecmascript)");
;
;
;
const sizes = {
    sm: 36,
    md: 48,
    lg: 64
};
const framePadding = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2"
};
const imageSizeClass = {
    sm: "h-9 w-9",
    md: "h-12 w-12",
    lg: "h-16 w-16"
};
function Logo({ href = "#beranda", showText = true, showTagline = false, size = "md", onDark = false, className = "" }) {
    const dimension = sizes[size];
    const image = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        src: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["company"].logoSrc,
        alt: "",
        width: dimension,
        height: dimension,
        className: `shrink-0 object-contain transition-opacity group-hover:opacity-95 ${imageSizeClass[size]}`,
        priority: size === "md",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        className: `group flex items-center gap-2.5 sm:gap-3 ${className}`,
        "aria-label": __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["company"].fullName,
        children: [
            onDark ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-flex shrink-0 rounded-md bg-white shadow-sm ring-1 ring-white/30 transition-shadow group-hover:shadow-md group-hover:ring-gold/50 ${framePadding[size]}`,
                children: image
            }, void 0, false, {
                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this) : image,
            showText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 leading-tight",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `font-serif font-semibold tracking-wide text-white ${size === "lg" ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["company"].name
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[9px] uppercase tracking-[0.18em] text-gold/90 sm:text-[10px] sm:tracking-[0.2em]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["company"].suffix
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    showTagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 hidden text-[10px] text-white/45 sm:block",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["company"].tagline
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Logo.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const navLinks = [
    {
        href: "#beranda",
        label: "Beranda"
    },
    {
        href: "#tentang",
        label: "Tentang Kami"
    },
    {
        href: "#layanan",
        label: "Layanan"
    },
    {
        href: "#tim",
        label: "Tim Advokat"
    },
    {
        href: "#kontak",
        label: "Kontak"
    }
];
function Header() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 z-50 w-full border-b border-white/10 bg-navy/95 backdrop-blur-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-3 lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$components$2f$Logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onDark: true
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-8 md:flex",
                        children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                className: "text-sm text-white/75 transition-colors hover:text-gold",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#kontak",
                        className: "hidden rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-gold-light md:inline-block",
                        children: "Konsultasi Gratis"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": open ? "Tutup menu" : "Buka menu",
                        className: "flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden",
                        onClick: ()=>setOpen(!open),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-t border-white/10 bg-navy px-6 py-4 md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-4",
                    children: [
                        navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: "block text-white/80 hover:text-gold",
                                    onClick: ()=>setOpen(false),
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#kontak",
                                className: "inline-block rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-navy",
                                onClick: ()=>setOpen(false),
                                children: "Konsultasi Gratis"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Header.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Contact() {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [fieldErrors, setFieldErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        const form = e.currentTarget;
        const formData = new FormData(form);
        const nama = String(formData.get("nama") ?? "");
        const telepon = String(formData.get("telepon") ?? "");
        const email = String(formData.get("email") ?? "");
        const layanan = String(formData.get("layanan") ?? "");
        const pesan = String(formData.get("pesan") ?? "");
        const message = `Halo, saya ${nama || "-"}\nSaya ingin konsultasi tentang: ${layanan || "-"}\nNomor telepon: ${telepon || "-"}\nEmail: ${email || "-"}\nPesan: ${pesan || "-"}`;
        const OFFICE_WA = "+62 812 3456 7890";
        const phone = normalizePhoneNumber(OFFICE_WA);
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        try {
            window.open(url, "_blank");
            setStatus("success");
            form.reset();
        } catch  {
            setErrorMessage("Gagal membuka WhatsApp. Silakan coba manual.");
            setStatus("error");
        }
    }
    // Open WhatsApp chat with prefilled message using form values
    function normalizePhoneNumber(input) {
        const digits = input.replace(/\D/g, "");
        if (!digits) return "6281234567890"; // fallback office number
        if (digits.startsWith("0")) return `62${digits.slice(1)}`;
        if (!digits.startsWith("62")) return `62${digits}`;
        return digits;
    }
    function handleWhatsappClick(e) {
        const btn = e.currentTarget;
        const form = btn.closest("form");
        const OFFICE_WA = "+62 812 3456 7890";
        let nama = "";
        let telepon = "";
        let email = "";
        let layanan = "";
        let pesan = "";
        if (form) {
            const formData = new FormData(form);
            nama = String(formData.get("nama") ?? "");
            telepon = String(formData.get("telepon") ?? "");
            email = String(formData.get("email") ?? "");
            layanan = String(formData.get("layanan") ?? "");
            pesan = String(formData.get("pesan") ?? "");
        }
        const message = `Halo, saya ${nama}\nSaya ingin konsultasi tentang: ${layanan || "-"}\nNomor telepon: ${telepon || "-"}\nEmail: ${email || "-"}\nPesan: ${pesan || "-"}`;
        const phone = normalizePhoneNumber(OFFICE_WA);
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "kontak",
        className: "bg-cream py-24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-16 lg:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-widest text-gold",
                                children: "Hubungi Kami"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-3 font-serif text-3xl font-semibold text-navy sm:text-4xl",
                                children: "Konsultasi Awal Gratis"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 leading-relaxed text-muted",
                                children: "Ceritakan kebutuhan hukum Anda. Tim kami akan merespons dalam 1×24 jam kerja untuk menjadwalkan pertemuan awal — secara langsung atau daring."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                className: "mt-10 space-y-6 not-italic",
                                children: [
                                    {
                                        label: "Kantor Pusat",
                                        value: "Gedung Nusantara Tower Lt. 18\nJl. Sudirman Kav. 52–53, Jakarta Selatan 12190"
                                    },
                                    {
                                        label: "Telepon",
                                        value: "+62 21 5790 4500"
                                    },
                                    {
                                        label: "WhatsApp",
                                        value: "+62 812 3456 7890"
                                    },
                                    {
                                        label: "Email",
                                        value: "kontak@nusantaralegal.id"
                                    },
                                    {
                                        label: "Jam Operasional",
                                        value: "Senin–Jumat, 08.00–18.00 WIB"
                                    }
                                ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-navy text-gold",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-5 w-5",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 1.5,
                                                        d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                lineNumber: 108,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold uppercase tracking-wider text-gold",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 whitespace-pre-line text-sm text-navy",
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                lineNumber: 123,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-sm border border-navy/8 bg-white p-8 shadow-sm lg:p-10",
                        children: status === "success" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-full min-h-[320px] flex-col items-center justify-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-8 w-8",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M5 13l4 4L19 7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 141,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-6 font-serif text-xl font-semibold text-navy",
                                    children: "Pesan Terkirim"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 max-w-sm text-sm text-muted",
                                    children: "Terima kasih. Permintaan konsultasi Anda telah dikirim ke tim kami. Kami akan menghubungi Anda melalui email atau telepon yang dicantumkan."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 152,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setStatus("idle"),
                                    className: "mt-6 text-sm font-medium text-gold hover:text-navy",
                                    children: "Kirim pesan lain"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 156,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                            lineNumber: 138,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleSubmit,
                            className: "space-y-5",
                            noValidate: true,
                            children: [
                                status === "error" && errorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    role: "alert",
                                    className: "rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800",
                                    children: errorMessage
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 167,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid gap-5 sm:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "nama",
                                                    className: "block text-sm font-medium text-navy",
                                                    children: "Nama Lengkap"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "nama",
                                                    name: "nama",
                                                    type: "text",
                                                    required: true,
                                                    disabled: status === "loading",
                                                    "aria-invalid": !!fieldErrors.nama,
                                                    className: "mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60",
                                                    placeholder: "Nama Anda"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 21
                                                }, this),
                                                fieldErrors.nama && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-red-600",
                                                    children: fieldErrors.nama
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 176,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "telepon",
                                                    className: "block text-sm font-medium text-navy",
                                                    children: "Nomor Telepon"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "telepon",
                                                    name: "telepon",
                                                    type: "tel",
                                                    required: true,
                                                    disabled: status === "loading",
                                                    "aria-invalid": !!fieldErrors.telepon,
                                                    className: "mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60",
                                                    placeholder: "08xx xxxx xxxx"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this),
                                                fieldErrors.telepon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-red-600",
                                                    children: fieldErrors.telepon
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 209,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "email",
                                            className: "block text-sm font-medium text-navy",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 214,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: "email",
                                            name: "email",
                                            type: "email",
                                            required: true,
                                            disabled: status === "loading",
                                            "aria-invalid": !!fieldErrors.email,
                                            className: "mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60",
                                            placeholder: "nama@perusahaan.com"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 217,
                                            columnNumber: 19
                                        }, this),
                                        fieldErrors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-600",
                                            children: fieldErrors.email
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 228,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "layanan",
                                            className: "block text-sm font-medium text-navy",
                                            children: "Jenis Layanan"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 232,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            id: "layanan",
                                            name: "layanan",
                                            disabled: status === "loading",
                                            className: "mt-1.5 w-full rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Pilih area kebutuhan"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Hukum Perusahaan & Korporasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Litigasi & Arbitrase"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Ketenagakerjaan"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Properti & Real Estat"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 245,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Kepatuhan & Regulasi"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Hukum Keluarga & Waris"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: "Lainnya"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "pesan",
                                            className: "block text-sm font-medium text-navy",
                                            children: "Uraian Singkat"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 252,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            id: "pesan",
                                            name: "pesan",
                                            rows: 4,
                                            required: true,
                                            disabled: status === "loading",
                                            "aria-invalid": !!fieldErrors.pesan,
                                            className: "mt-1.5 w-full resize-none rounded-sm border border-navy/15 bg-cream/30 px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold disabled:opacity-60",
                                            placeholder: "Jelaskan kebutuhan hukum Anda secara ringkas..."
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 255,
                                            columnNumber: 19
                                        }, this),
                                        fieldErrors.pesan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-red-600",
                                            children: fieldErrors.pesan
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                            lineNumber: 266,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 251,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: status === "loading",
                                    className: "w-full rounded-sm bg-green-600 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-70",
                                    children: status === "loading" ? "Membuka WhatsApp..." : "Konsultasi via WhatsApp"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-xs text-muted",
                                    children: "Dengan mengirimkan, Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                            lineNumber: 165,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/untitled folder 2/WebsiteLaw/src/components/Contact.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Desktop_untitled%20folder%202_WebsiteLaw_src_11ns8ol._.js.map