module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/contact.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "escapeHtml",
    ()=>escapeHtml,
    "validateContactPayload",
    ()=>validateContactPayload
]);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function validateContactPayload(body) {
    if (!body || typeof body !== "object") {
        return {
            ok: false,
            errors: {
                pesan: "Data formulir tidak valid."
            }
        };
    }
    const raw = body;
    const errors = {};
    const nama = String(raw.nama ?? "").trim();
    const telepon = String(raw.telepon ?? "").trim();
    const email = String(raw.email ?? "").trim();
    const layanan = String(raw.layanan ?? "").trim();
    const pesan = String(raw.pesan ?? "").trim();
    if (nama.length < 2) errors.nama = "Nama minimal 2 karakter.";
    if (telepon.length < 8) errors.telepon = "Nomor telepon tidak valid.";
    if (!EMAIL_RE.test(email)) errors.email = "Format email tidak valid.";
    if (pesan.length < 10) errors.pesan = "Uraian minimal 10 karakter.";
    if (pesan.length > 5000) errors.pesan = "Uraian terlalu panjang (maks. 5000 karakter).";
    if (Object.keys(errors).length > 0) {
        return {
            ok: false,
            errors
        };
    }
    return {
        ok: true,
        data: {
            nama,
            telepon,
            email,
            layanan: layanan || "Tidak dipilih",
            pesan
        }
    };
}
function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/company.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/send-contact-email.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEmailConfigured",
    ()=>isEmailConfigured,
    "sendContactEmail",
    ()=>sendContactEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/resend/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/company.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/contact.ts [app-route] (ecmascript)");
;
;
;
function getEmailConfig() {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;
    const from = process.env.CONTACT_EMAIL_FROM ?? `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["company"].name} <onboarding@resend.dev>`;
    if (!apiKey || !to) {
        return null;
    }
    return {
        apiKey,
        to,
        from
    };
}
function isEmailConfigured() {
    return getEmailConfig() !== null;
}
async function sendContactEmail(payload) {
    const config = getEmailConfig();
    if (!config) {
        return {
            ok: false,
            message: "Email belum dikonfigurasi. Isi RESEND_API_KEY dan CONTACT_EMAIL_TO di file .env.local."
        };
    }
    const resend = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$resend$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Resend"](config.apiKey);
    const rows = [
        [
            "Nama",
            payload.nama
        ],
        [
            "Telepon",
            payload.telepon
        ],
        [
            "Email",
            payload.email
        ],
        [
            "Layanan",
            payload.layanan
        ],
        [
            "Pesan",
            payload.pesan
        ]
    ];
    const htmlRows = rows.map(([label, value])=>`<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;color:#0f1c2e;">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#1a2332;">${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(value).replace(/\n/g, "<br>")}</td></tr>`).join("");
    const { error } = await resend.emails.send({
        from: config.from,
        to: [
            config.to
        ],
        replyTo: payload.email,
        subject: `[Konsultasi] ${payload.nama} — ${payload.layanan}`,
        html: `
      <div style="font-family:system-ui,sans-serif;max-width:560px;">
        <h2 style="color:#0f1c2e;margin:0 0 16px;">Permintaan Konsultasi Baru</h2>
        <p style="color:#5c6b7a;margin:0 0 20px;">Diterima dari formulir website ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["escapeHtml"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$company$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["company"].fullName)}.</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">${htmlRows}</table>
      </div>
    `,
        text: rows.map(([label, value])=>`${label}: ${value}`).join("\n")
    });
    if (error) {
        console.error("[contact-email]", error);
        return {
            ok: false,
            message: "Gagal mengirim email. Periksa konfigurasi Resend atau coba lagi nanti."
        };
    }
    return {
        ok: true
    };
}
}),
"[project]/Desktop/untitled folder 2/WebsiteLaw/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/contact.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$send$2d$contact$2d$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/untitled folder 2/WebsiteLaw/src/lib/send-contact-email.ts [app-route] (ecmascript)");
;
;
;
async function POST(request) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$send$2d$contact$2d$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEmailConfigured"])()) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Layanan email belum aktif. Admin perlu mengisi RESEND_API_KEY dan CONTACT_EMAIL_TO di .env.local."
        }, {
            status: 503
        });
    }
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Format permintaan tidak valid."
        }, {
            status: 400
        });
    }
    const validated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$contact$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateContactPayload"])(body);
    if (!validated.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            errors: validated.errors
        }, {
            status: 400
        });
    }
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$src$2f$lib$2f$send$2d$contact$2d$email$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendContactEmail"])(validated.data);
    if (!result.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: result.message
        }, {
            status: 502
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$untitled__folder__2$2f$WebsiteLaw$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0yv5s43._.js.map