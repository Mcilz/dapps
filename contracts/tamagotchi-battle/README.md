[![Open in Gitpod](https://img.shields.io/badge/Open_in-Gitpod-white?logo=gitpod)](https://gitpod.io/#FOLDER=tamagotchi-battle/https://github.com/gear-foundation/dapps)
[![Docs](https://img.shields.io/github/actions/workflow/status/gear-foundation/dapps/contracts.yml?logo=rust&label=docs)](https://dapps.gear.rs/tamagotchi_battle_io)

# Tamagotchi battle

### 🏗️ Building

```sh
cargo b -r -p "tamagotchi-battle*"
```

### ✅ Testing

Run all tests, except `gclient` ones:
```sh
cargo t -r -p "tamagotchi-battle*" -- --skip gclient
```

Run all tests:
```sh
# Download the node binary.
cargo xtask node
cargo t -r -p "tamagotchi-battle*"
```
