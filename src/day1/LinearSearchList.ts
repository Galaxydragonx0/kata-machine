import { walkForTsConfig } from "tsconfig-paths/lib/tsconfig-loader";

export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let i = 0; i < haystack.length; i++) {
        if (needle == haystack[i]) return true;
    }

    return false;
}

