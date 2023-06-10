module.exports = {
    "*.{ts,tsx}": (filenames) =>
        `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`,
    "*.{js,ts,jsx,tsx,json}": [(files) => `prettier --write ${files.join(" ")}`],
};
