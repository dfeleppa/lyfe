Fraunces Latin display fonts

Copyright 2018 The Fraunces Project Authors
https://github.com/undercasetype/Fraunces
License: OFL-Fraunces.txt (SIL Open Font License 1.1)
Version: 1.000;[b76b70a41]

These are Latin WOFF2 subsets from Google Fonts, formerly downloaded at build
time by next/font/google. They retain variable optical sizing (opsz), regular
and italic styles. Unused SOFT/WONK variations use their default values and
weight is pinned to 400, the display weight used by the website. Inter remains
variable and is used for the site's bold/semibold text.

Preparation: next/font/google Fraunces with subsets ['latin'], styles
['normal','italic'], axes ['opsz'], then fontTools.varLib.instancer:
instantiateVariableFont(TTFont(source), {'wght': 400}, inplace=True).save(output)
Original next/font Latin assets before pinning:
791bf8c4bb753ed6-s.p.0524igg32t-c1.woff2 (regular)
8010b10db0d5feb2-s.p.0j~~wvhvc~~2a.woff2 (italic)

No Python/fontTools runtime or build dependency is required; the optimized
assets are committed and served locally by next/font/local.

November 2026 payload optimization:
All fonts retain ASCII plus the non-ASCII characters used in src/**/*.ts(x).
fontTools.subset retains all layout features and Fraunces optical sizing.
Inter is the same Google Fonts Latin asset 83afe278b6a6bb3c-s.p.0q-301v4kxxnr.woff2,
restricted to the site's 400-700 weight range before subsetting.
Inter copyright 2020 The Inter Project Authors (https://github.com/rsms/inter).
License: OFL-Inter.txt. All outlines used by the current site are preserved.
Combined font payload: 72,720 bytes (previously 125,216 bytes).
When adding non-English copy, expand these subsets from the upstream fonts.
