CMS.registerEditorComponent({
  id: 'icon',
  label: 'Icon',
  fields: [
    {
      name: 'icon',
      label: 'Icon',
      widget: 'select',
      options: [
        'amazon',
        'apple',
        'bars',
        'bell',
        'blogger',
        'bluesky',
        'bomb',
        'bug',
        'check',
        'chevron-down',
        'circle-info',
        'codeberg',
        'codepen',
        'code',
        'comment',
        'dev',
        'discord',
        'discourse',
        'docker',
        'download',
        'dribbble',
        'edit',
        'email',
        'envelope',
        'expand',
        'eye',
        'facebook',
        'fire',
        'flickr',
        'fork',
        'foursquare',
        'ghost',
        'github',
        'gitlab',
        'globe',
        'goodreads',
        'google',
        'graduation-cap',
        'hackernews',
        'hashnode',
        'heart-empty',
        'heart',
        'image',
        'instagram',
        'itch-io',
        'keybase',
        'kickstarter',
        'ko-fi',
        'language',
        'lastfm',
        'lightbulb',
        'linkedin',
        'link',
        'list',
        'location-dot',
        'lock',
        'mastodon',
        'medium',
        'microsoft',
        'moon',
        'mug-hot',
        'music',
        'orcid',
        'patreon',
        'paypal',
        'pencil',
        'pgpkey',
        'phone',
        'pinterest',
        'poo',
        'reddit',
        'researchgate',
        'rss-square',
        'rss',
        'scale-balanced',
        'search',
        'shield',
        'skull-crossbones',
        'slack',
        'snapchat',
        'soundcloud',
        'spotify',
        'stack-overflow',
        'star',
        'steam',
        'stripe',
        'substack',
        'sun',
        'tag',
        'telegram',
        'text.txt',
        'threads',
        'tiktok',
        'triangle-exclamation',
        'tumblr',
        'twitch',
        'twitter',
        'wand-magic-sparkles',
        'whatsapp',
        'xing',
        'xmark',
        'x-twitter',
        'youtube',
      ],
    },
  ],
  pattern: /^{{< icon "([^"]+)" >}}$/,
  fromBlock: function (match) {
    return {
      icon: match[1],
    };
  },
  toBlock: function (data) {
    return `{{< icon "${data.icon}" >}}`;
  },
  toPreview: function (data) {
    return `
      <div>
        <img src="/path/to/icons/${data.icon}" alt="${data.icon}" style="width: 24px; height: 24px;" />
      </div>
    `;
  },
});
