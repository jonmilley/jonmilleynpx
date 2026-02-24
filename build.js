import chalk from 'chalk'
import boxen from 'boxen'
import fs from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'
import gs from 'gradient-string'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
const blue = '#00A3FF'
const green = '#02e088'
const orange = '#ff7b01'
const pink = '#ff1675'

const bg = gs(blue, green)
const ob = gs(orange, pink)
// Text + chalk definitions
const data = {
  name: '               Jonathan Milley',
  handle: 'jonmilley',
  work: chalk.white('Senior Software Engineer at Viasat'),

  twitter: chalk.gray('https://x.com/') + chalk.cyan('jonmilley'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~jonmilleynpm'),
  github: chalk.gray('https://github.com/') + chalk.green('jonmilley'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('jonmilley'),
  web: chalk.cyan('https://milley.dev'),
  npx: chalk.red('npx') + ' ' + chalk.white('jonmilley'),
  labelWork: chalk.white.bold('       Work:'),
  labelOpenSource: chalk.white.bold('Open Source:'),
  labelTwitter: chalk.white.bold('          X:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:'),
  opensourcing: '',
  bio: `I am a father of 2, geek, photographer, illustrator,
and software developer, crocheter, quilter living in Newfoundland, Canada.`
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensourcing}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const bio = `${data.bio}`
// Put all our output together into a single variable so we can use boxen effectively
const output = bg(heading) + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work

               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding + // data.labelCard + data.npx
               newline + newline + // Add one whole blank line
               ob.multiline(bio)

const outputPath = path.join(__dirname, 'bin/output')
const rendered = chalk.blue(boxen(output, options))

// Check if output has changed; if so, write it and bump the patch version
const prev = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, 'utf8') : null
if (prev !== rendered) {
  fs.writeFileSync(outputPath, rendered)

  const pkgPath = path.join(__dirname, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
  const [major, minor, patch] = pkg.version.split('.').map(Number)
  pkg.version = `${major}.${minor}.${patch + 1}`
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')

  console.log(`Output changed — version bumped to ${pkg.version}`)
} else {
  console.log('Output unchanged — version not bumped')
}
