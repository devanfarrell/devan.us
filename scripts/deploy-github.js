const ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/devanfarrell/devandotus.git"
  },
  e => {
    console.log("Deploy Complete!");
    if (e) {
      console.log(e);
    }
  }
);
