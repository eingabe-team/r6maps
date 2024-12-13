# r6maps
![Vercel](https://vercelbadge.vercel.app/api/eingabe-team/r6maps)

**Hosted at http://eingabe.team**

r6maps is designed to be a quick reference for Rainbow Six Siege maps. Please see the about.html page for more details.

## Running locally

### Building and running
- Install npm and install packages: `npm install`
- General build: `npm run build`
    + Builds js and scss into the `site` folder.
    + Check `package.json` for more particular scripts.
- File watchers are also available (see `packages.json`)
- To run, locate `site/index.html` and open it.

## Things to work on
Contributions are welcome. :)

### Active
Current development is fairly "steady state" with only a few new features planned:
- [ ] Menu footer links (twitter, email, donate?)
- [ ] Select map filter for casual, rank, custom, etc

### Steady-state
- [ ] Translations - [info on how you can help](https://eingabe-team.github.io/r6maps/about/translations-help.html).
- [ ] [Open issues](https://github.com/eingabe-team/r6maps/issues)
- [ ] Map accuracy - please log any errors/missing items as an [issue](https://github.com/eingabe-team/r6maps/issues)
- [ ] New maps

### Thinking about (maybe someday)...
- [ ] Mark breakable windows - [see original feature suggestion here](https://github.com/capajon/r6maps/issues/89).
- [ ] Better stats integration (e.g. link from objective) <- dependent on new data dumps from Ubisoft though
- [ ] Tactics drawing (& saving/sharing)
- [ ] Shared sessions (map controls, shared pings, drawing if available)
- [ ] Automated tests (perceptual diff?)
- [ ] Offline mode (progressive web app? Cordova?)
- [ ] Embedded curated hints/strats (e.g. drone placement, angles)
