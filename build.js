#!/usr/bin/env zx 
import { $, chalk } from 'zx';
 
try { 
    await $`rollup -c`;
    await $`echo '{"type": "module"}' > dist/esm/package.json`;
    await $`echo '{"type": "commonjs"}' > dist/cjs/package.json`;
    console.log(chalk.green('Compilation successful'));
} catch (error) { 
    console.error(chalk.red('Compilation failed:'), chalk.red(error.message));
};