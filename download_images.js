const fs = require('fs');
const path = require('path');
const https = require('https');

const chars = [
  { id: 1, url: "https://cdn.picrew.me/shareImg/org/202312/1066071_szXRBxCT.png", name: "char1.png" },
  { id: 2, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=KaitoSamurai&backgroundColor=b6e3f4&hair=long01&hairColor=red", name: "char2.svg" },
  { id: 3, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=DrIrisVale&backgroundColor=c0aede&eyes=variant12&hair=long02&hairColor=black", name: "char3.svg" },
  { id: 4, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=VelvetNoir&backgroundColor=ffd5dc&eyes=variant14&hair=long04&hairColor=2c1b18&skinColor=f8d25c", name: "char4.svg" },
  { id: 5, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=RexTalonDragon&backgroundColor=ffdfbf&eyes=variant10&hair=short01&hairColor=f97316&skinColor=ecad80", name: "char5.svg" },
  { id: 6, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=NyxShadowmere&backgroundColor=1a1a2e&eyes=variant06&hair=long03&hairColor=2c1b18&skinColor=ae9f9f", name: "char6.svg" },
  { id: 7, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=MochiChanAndroid&backgroundColor=ffd5dc&eyes=variant16&hair=long06&hairColor=f472b6&skinColor=fce4ec", name: "char7.svg" },
  { id: 8, url: "https://api.dicebear.com/9.x/adventurer/svg?seed=DukeAsmodeus&backgroundColor=1a0000&eyes=variant08&hair=short04&hairColor=000000&skinColor=eac393", name: "char8.svg" }
];

const dir = path.join(__dirname, 'assets', 'chars');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

chars.forEach(c => {
  const file = fs.createWriteStream(path.join(dir, c.name));
  https.get(c.url, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();  
        console.log("Downloaded", c.name);
      });
    } else {
      console.error("Failed to download", c.name, response.statusCode);
    }
  }).on('error', function(err) {
    fs.unlink(path.join(dir, c.name), () => {});
    console.error("Error", c.name, err.message);
  });
});
