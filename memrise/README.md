# MemRise Scrapping Tools
This is a set of tools for scrapping MemRise courses.
(Well, it's not exactly scrapping since we use their JSON API)
Works as of February 2022, though no guarantees for tommorrow.

## How it works
* Step 0. Setup cookies to access MemRise.
* Step 1.0. Setup target course's id and number of levels.
* Step 1.1. Download target course's raw JSONs.
* Step 2. Parse the JSONs.
* Step 3. Download media mentioned in the JSONs.
* Step 4. Rename & rearrange the media in any way that fits your goals.

## Usage Example
```sh
# download 19 raw levels of the course #102400
COOKIES='' node ./actions/downloadMemriseCourse.mjs 102400 19
# parse it (see script file for details)
node actions/parseDownloadedMemriseCourse.mjs
# download media
node actions/downloadMediaFiles.mjs
# rename downloaded media if required
```
