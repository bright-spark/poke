const {
  fetcher,
  core,
  wiki,
  musicInfo,
  modules,
  version,
  initlog,
  init,
} = require("../libpoketube-initsys.js");
const {
  IsJsonString,
  convert,
  getFirstLine,
  capitalizeFirstLetter,
  turntomins,
  getRandomInt,
  getRandomArbitrary,
} = require("../ptutils/libpt-coreutils.js");

var http = require("https");
var ping = require("ping");

const sha384 = modules.hash;


const splash = [
     "Woke!",
     "Gay gay homosexaul gay!",
     "free Palestine!",
     "free software!",
     "im... stuff!",
     "frick capitalism!",
     "still calling it twitter btw!",
    "boop!",
    "no way!",
    "traaaa rightssss!",
    "XD!",
    "nya!",
    "say gex!",
    "also try invidious!",
    "rms <3!",
    "du hast",
    "can u belive no one bought this?",
    "reee",
    "1.000.000€!",
    "pika!",
    "fsf.org",
    "ssfffssfssfffaassssfsdf!",
    "𝓯𝓻𝓮𝓪𝓴𝔂poke",
    "can you save my hds?",
    "sahlo folina!",
    "we come for you!",
    "no chances!",
    "dema dont control us!",
    "im fairly local!",
    "i dont wanna go like this!",
    "east is up!",
    "not done, josh dun!",
    "your the judge, oh no!",
    "I dont wanna backslide",
    "welcome back to trench!",
    "sai is propaganda!",
    " •|i|• Ø i+! ].[",
    "stay alive! |-/",
    "the few, the proud, the Emotional!",
    "ill morph into someone else",
    "still alive",
    "follow the torches",
    "i created this world!",
    "to feel some control!",
    "destory it if i want!",
    "o7 keons",
    "at least let me clean my room",
    "100+ stars on gh!",
    "now even gayer!",
    "poketube!!!",
    "rvlt.gg/poke!",
    "women are pretty!",
    "men are handsome!",
    "enbys are cute!",
    "you are cute :3",
    "read if cute!",
    "stallmansupport.org!!!"
]




function getJson(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}

module.exports = function (app, config, renderTemplate) {
  app.get("/app", async function (req, res) {
   const { fetch } = await import("undici");

    let tab = "";
    if (req.query.tab) {
      tab = `/?type=${capitalizeFirstLetter(req.query.tab)}`;
    }

    const invtrend = await fetch(
      `${config.invapi}/trending${tab}`
    );
    const t = getJson(await invtrend.text());

    const invpopular = await fetch(
      `https://invid-api.poketube.fun/api/v1/popular`
    );
    const p = getJson(await invpopular.text());

    let j = null;
    if (req.query.mobilesearch) {
      const query = req.query.mobilesearch;
      const continuation = req.query.continuation || "";
      const search = await fetch(
        `https://inner-api.poketube.fun/api/search?query=${query}&continuation=${continuation}`
      );
      const text = await search.text();
      j = getJson(modules.toJson(text));
    }

    renderTemplate(res, req, "discover.ejs", {
      tab: req.query.tab,
      isMobile: req.useragent.isMobile,
      p,
      mobilesearch: req.query.mobilesearch,
      inv: t,
      turntomins,
      continuation: req.query.continuation,
      j,
    });
  });

  app.get("/:v*?", async function (req, res) {
    const uaos = req.useragent.os;
    const random = splash[Math.floor(Math.random() * splash.length)];
    const browser = req.useragent.browser;
    const isOldWindows = (uaos === "Windows 7" || uaos === "Windows 8") && browser === "Firefox";
    var proxyurl = config.p_url;

    const secure = [
      "poketube.fun",
      "localhost" // Testing purposes
    ].includes(req.hostname);
    const verify = [
      "poketube.fun",
      "poke.ashley0143.xyz",
      "localhost"
    ].includes(req.hostname);

    const rendermainpage = () => {
      if (req.useragent.isMobile) {
        return res.redirect("/app");
      }

      return renderTemplate(res, req, "landing.ejs", {
        secure,
        embedtype:req.query.embedtype,
        verify,
        isOldWindows,
        proxyurl,
        random
      });
    };

    if (req.params.v && /[a-zA-Z0-9]+/.test(req.params.v)) {
      const isvld = await core.isvalidvideo(req.params.v);
      if (isvld && req.params.v.length >= 10) {
        return res.redirect(`/watch?v=${req.params.v}`);
      } else {
          return renderTemplate(res, req, "404.ejs", {
        isOldWindows,
        random
      });
      }
    }

    return rendermainpage();
  });
};