module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    ["@semantic-release/exec", {
      prepareCmd: "flutter pub get && sed -i 's/version: .*/version: ${nextRelease.version}/' pubspec.yaml"
    }],
    ["@semantic-release/git", {
      assets: ["CHANGELOG.md", "pubspec.yaml"],
      message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
    }],
    "@semantic-release/github"
  ]
}