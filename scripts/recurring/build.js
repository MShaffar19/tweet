const writeTweet = require('../writeTweet')

const type = 'build'

const tweet = `Thanks to the orgs that provide infrastructure to the Build WG:

Tier 1:
✨ @digitalocean
✨ @Rackspace

Tier 2:
@Microsoft, @joyent, @IBM, @MacStadium, @Scaleway, @arm, @Cloudflare, @osuosl, @packethost, @intel

You can find details in the Build repo:
https://github.com/nodejs/build`

writeTweet(type, tweet)
