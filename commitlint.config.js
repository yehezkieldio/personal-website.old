/**
 * @type {import('@commitlint/types').UserConfig}
 */
module.exports = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "scope-enum": [2, "always", ["web", "deps"]],
        "type-enum": [
            2,
            "always",
            ["build", "ci", "docs", "chore", "feat", "fix", "perf", "refactor", "revert", "style", "test", "release"],
        ],
    },
};
