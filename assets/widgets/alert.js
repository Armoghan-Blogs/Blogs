// Register the custom editor component
CMS.registerEditorComponent({
  // Internal id of the component
  id: 'alert',

  // Visible label
  label: 'Alert',

  // Fields the user needs to fill out when adding an instance of the component
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
      required: true,
      default: 'fire',
    },
    {
      name: 'cardColor',
      label: 'Card Color',
      widget: 'color',
      default: '#e63946',
    },
    {
      name: 'iconColor',
      label: 'Icon Color',
      widget: 'color',
      default: '#1d3557',
    },
    {
      name: 'textColor',
      label: 'Text Color',
      widget: 'color',
      default: '#f1faee',
    },
    {
      name: 'content',
      label: 'Content',
      widget: 'markdown',
      required: true,
      default: 'This is an alert!',
    },
  ],

  // Regex pattern used to search for instances of this block in the markdown document.
  pattern:
    /^{{< alert icon="([^"]+)" cardColor="([^"]+)" iconColor="([^"]+)" textColor="([^"]+)" >}}\n([\s\S]*?)\n{{< \/alert >}}$/,

  // Given a RegExp Match object, return an object with one property for each field defined in `fields`.
  fromBlock: function (match) {
    return {
      icon: match[1],
      cardColor: match[2],
      iconColor: match[3],
      textColor: match[4],
      content: match[5].trim(), // Remove any leading/trailing whitespace
    };
  },

  // Given an object with one property for each field defined in `fields`, return the string you wish to be inserted into your markdown.
  toBlock: function (data) {
    return `{{< alert icon="${data.icon}" cardColor="${data.cardColor}" iconColor="${data.iconColor}" textColor="${data.textColor}" >}}\n${data.content}\n{{< /alert >}}`;
  },

  // Preview output for this component. Can either be a string or a React component
  toPreview: function (data) {
    return `
      <div style="background-color: ${data.cardColor}; color: ${data.textColor}; padding: 10px; border-radius: 5px;">
        <i class="icon-${data.icon}" style="color: ${data.iconColor};"></i>
        ${data.content}
      </div>
    `;
  },
});
