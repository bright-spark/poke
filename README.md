 
<h1 align="center">
  <a href="https://poketube.fun/watch?v=9sJUDx7iEJw&quality=medium&=sjohgteojgytrueugtye4jhtytjrjnyıı">
   <img src="https://poketube.fun/css/logo-poke.svg" width="400"> 
    <a href="http://www.defectivebydesign.org/drm-free">
<img src="https://static.fsf.org/dbd/label/DRM-free%20label%20120.en.png" 
alt="DefectiveByDesign.org"
width="65" height="65" border="0" align="middle" /></a>
   </a>
   <p>The Ultimate Privacy App</p>
   </h1>
  
<div align="center">

   <span> Be Anonymous watching epic videos, searching thingys on the interwebs and listening to music on poke - the free privacy front end!</span>
   
   <span>"Since you work on poke, Are you in touch with its lead developer "Jose marchasi"? <br>
-RMS 

Stallman though poke was GNU poke lmaoooo
   </span>
   </div>


<div align="center">

[Welcome!](#welcome)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Features](#features)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[No non-free codec needed](#no-non-free-codec-needed-3)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Hosting Poke~](#hosting-poketube)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Poke community!](#poketube-community)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[The Legal Stuff (boring tbh)](#the-legal-stuff-boring-tbh)

<a href="https://status.poketube.fun" target="_blank">
  <img 
    width="170"
    src="https://api.netweak.com/status-badges/K2LY9"
    alt="Netweak status badge"
  />
</a><br>
<a href="https://tosdr.org/en/service/7114">
   <img src="https://shields.tosdr.org/en_7114.svg"/>
</a>
<img src="https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/badges/StandWithUkraine.svg"> <a href="./LICENSE"><img src="https://img.shields.io/badge/License-GPL--3-FF6666" alt="License - GPL-3"></a>
</div>

![Preview](./css/README_Preview.png)

## Welcome!

This is the source code of Poke (formerly PokeTube), the privacy-friendly youtube front-end built with the InnerTube API!

# Features

| <img width="100%" style="border-radius: 24px" src="./css/README_RYD.png"> | <div style="text-align: left"><h3>Return YouTube Dislikes Built-In</h3>See the dislikes from returnyoutubedislike! </div> |
| - | - |
| <div style="text-align: right"><h3>PWA Support</h3> With PWA Support, you can install Poke on your mobile device :3</div> | <img width="100%" style="border-radius: 24px" src="./css/README_PWA.jpg"> |

<h3>Customize</h3>
Customize Poketube However you want :3

<h3>Accounts </h3>
Suscribe (yes Suscribe hehe sussy baka) to whaever channel you want!

<h3>Web Search </h3>
Search the web privatly on poketube :3

<br>
<h3>And... </h3>
<p>
Ambient mode, HQ audio And Even more!!!!!
 </p>

## Written by humans - not gpt
poke is made by hard-working hoomans - not gpt :3<br>
<a href="https://notbyai.fyi"><img src="https://cdn.glitch.global/d68d17bb-f2c0-4bc3-993f-50902734f652/Written-By-Human-Not-By-AI-Badge-white.svg?v=1696672202901" alt="Written by Humanss, Not by AI"></a>

## No Non-free codec needed :3

Poke uses openh264 which is free software! poketube does not inculude non free stuff owowowoow!!!!

you can view the source code of the openh264 codec in this repo :3 --> https://github.com/cisco/openh264.git

PLEASE NOTE THAT THIS SOFTWARE MAY INCULUDE CODECS THAT IN CERTAIN COUNTRIES MAY BE COVERED BY PATENTS OR HAVE LEGAL ISSUES. PATENT AND COPYRIGHT LAWS OPERATE DIFFERENTLY DEPENDING ON WHICH COUNTRY YOU ARE IN. PLEASE OBTAIN LEGAL ADVICE IF YOU ARE UNSURE WHETHER A PARTICULAR PATENT OR RESTRICTION APPLIES TO A CODEC YOU WISH TO USE IN YOUR COUNTRY.

## Hosting Poke~

### IMPORTANT 
Before you host, if ur server is in usa, set the proxylocation to `USA` (which is the default) - if you use any eu server set it to `EU` instead to make videos load faster

 ### With NodeJS
To self host your own Poke instance, you'll need some packages installed on your GNU/Linux install.

<details>
<summary>For Fedora/RHEL/Rocky/CentOS</summary>
<br/>

```
sudo dnf install git make gcc libcurl nodejs python libcurl4 g++
```

</details>

<details>
<summary>For Debian/Ubuntu</summary>
<br/>

```
sudo apt install git make gcc libcurl4-openssl-dev nodejs npm python g++
```

</details>
<br/>

Once you have everything, clone our repo:

<details open>
<summary>Clone via Codeberg</summary>
<br/>

```
git clone https://codeberg.org/ashley/poke.git
```

</details>
<details>
<summary>Clone via GitHub</summary>
<br/>

```
git clone https://github.com/ashley0143/poke.git
```

</details>
<br/>

Now, install the needed dependencies within the Poke folder:
( go to the folder by running cd poke)
```
npm install 
```

Once everythings installed, start your server with the following command:

```
node server.js
```

Congrats, Poketube should now be running on `localhost:6003`!

### With Docker
Create a new directory for PokeTube:
```
mkdir poketube && cd poketube
```

Download the docker compose and config file:
```
curl -O https://codeberg.org/Ashley/poke/raw/branch/main/docker-compose.yml
```

Run PokeTube:
```
docker compose up -d
```

PokeTube should be running on `http://localhost:6003`.

The port can be changed with the config file you downloaded, just change the `server_port` option. 

## Hosting Image Proxy

see [here](https://codeberg.org/Ashley/poke/src/branch/main/january) :3
just uhh change the url in config.json to ur image proxy

## Poke community!

Join the community on [revolt](https://rvlt.gg/poketube) or [matrix](https://matrix.to/#/#poke:vern.cc) :3

## The Legal Stuff (boring tbh)
the main parts of the project is Under GPL-3.0-OR-LATER :3

see the each sections LICENSE tho!!
Copyleft 2021-202x Poke Project


[Code Of conduct](https://codeberg.org/Ashley/poke/src/branch/main/CODE_OF_CONDUCT.md)

[Privacy Policy](https://poketube.fun/privacy)

TL;DR: we dont collect or share your personal info, that's it lol.

We additionally use the GNU Coding Standard, see [this link.](https://www.gnu.org/prep/standards)

<div>
<h3>some parts of poketube.fun is proudly hosted on glitch.com since <i>2020</i> </h3>
 <a href="https://glitch.com/"><img src="https://cdn.glitch.global/d68d17bb-f2c0-4bc3-993f-50902734f652/glitch-fastly-lock-up.svg?v=1696671148266"></a><br><hr>
<a href="https://gnu.org/not-open-source"><img width="200" src="https://autumn.revolt.chat/attachments/eNpfwV2C1_wudONe43YCvWr-4vbvLpG78HbuXgOYfO"></a>
</div>

