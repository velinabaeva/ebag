#!/usr/bin/env python3
"""Post-process Paper MCP get_jsx (inline-styles) output for the browser.

- Strip bogus border:solid noise (otherwise black wireframe boxes).
- Replace preserveAspectRatio=\"none\" with xMidYMid meet (Paper stretches icons in CSS boxes).
"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / "src" / "PaperDesign.tsx"

QUARTET = (
    "borderBlockEndStyle: 'solid', borderBlockStartStyle: 'solid', "
    "borderInlineEndStyle: 'solid', borderInlineStartStyle: 'solid', "
)

BLOCK = re.compile(
    r"borderBlockEndColor: '[^']*', borderBlockEndStyle: 'solid', "
    r"borderBlockStartColor: '[^']*', borderBlockStartStyle: 'solid', "
    r"borderBottomColor: '[^']*', borderBottomStyle: 'solid', "
    r"borderInlineEndColor: '[^']*', borderInlineEndStyle: 'solid', "
    r"borderInlineStartColor: '[^']*', borderInlineStartStyle: 'solid', "
    r"borderLeftColor: '[^']*', borderLeftStyle: 'solid', "
    r"borderRightColor: '[^']*', borderRightStyle: 'solid', "
    r"borderTopColor: '[^']*', borderTopStyle: 'solid', "
)


def main() -> None:
    text = TARGET.read_text(encoding="utf-8")
    text = text.replace(QUARTET, "")
    text, n_block = BLOCK.subn("", text)
    for prop in (
        "borderBlockEndStyle",
        "borderBlockStartStyle",
        "borderInlineEndStyle",
        "borderInlineStartStyle",
    ):
        text = re.sub(rf"{prop}: 'solid', ", "", text)
    before_ar = text.count('preserveAspectRatio="none"')
    text = text.replace(
        'preserveAspectRatio="none"',
        'preserveAspectRatio="xMidYMid meet"',
    )
    TARGET.write_text(text, encoding="utf-8")
    print(
        f"Wrote {TARGET} (border blocks: {n_block}, svg aspect none→meet: {before_ar})"
    )


if __name__ == "__main__":
    main()
