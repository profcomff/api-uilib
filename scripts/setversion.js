const parser = require("yargs-parser");
const PackageJson = require("@npmcli/package-json");

const updateRepo = async (version) => {
  // Change version in package.json file
  const pkgJson = await PackageJson.load(".");
  pkgJson.update({
    version: version,
  });
  pkgJson.save();
  console.log(`package.json version updated to ${version}`);
};

const [, , ...args] = process.argv;
const flags = parser(args, {
  string: ["version"],
  alias: {
    version: ["v"],
  },
});

updateRepo(flags.version);
