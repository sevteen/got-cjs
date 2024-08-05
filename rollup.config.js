import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import { globSync } from "glob";

const sourceFiles = globSync("source/**/*.ts");

export default [
	{
		input: sourceFiles,
		output: [
			{
				format: "esm", // Use ES module format for top-level await support
				dir: "dist/esm",
				entryFileNames: "[name].js",
				exports: "named",
				preserveModules: true,
			},
		],
		plugins: [
			resolve({ preferBuiltins: true }),
			commonjs(),
			json(),
			typescript({
				tsconfig: "./tsconfig.json",
			}),
		],
	},
	{
		input: sourceFiles,
		output: [
			{
				format: "cjs",
				dir: "dist/cjs",
				entryFileNames: "[name].js",
				exports: "named",
				preserveModules: true,
			},
		],
		plugins: [
			resolve({ preferBuiltins: true }),
			commonjs(),
			json(),
			typescript({
				tsconfig: "./tsconfig.cjs.json",
			}),
		],
	},
];
