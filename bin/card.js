#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)
