module.exports = {
  title: 'Black Ops Cold War Zombies',
  base: '/cold-war-zombies/',
  dest: './public',
  head: [
    ['link', { rel: 'icon', href: 'images/favicon.png' }]
  ],
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    logo: '/nav-logo.png',
    nav: [
      { text: 'Home', link: '/home.md' },
      { text: 'Die Maschine', link: '/die-maschine/' },
      { text: 'Firebase Z', link: '/firebase-z/' },
      { text: 'Mauer Der Toten', link: '/mauer-der-toten/' },
      { text: 'GitHub', link: 'https://github.com/Hiccup-za/cold-war-zombies' }
    ],
    sidebar: {
      '/die-maschine/': [
        ''
      ],
      '/firebase-z/': [
        ''
      ],
      '/mauer-der-toten/': [
        '',
        'main-easter-egg',
        'aether-tool',
        'bunny-disco',
        'klaus-upgrades',
        'music-easter-egg',
        'wonder-weapon'
      ],
    },
    smoothScroll: true,
  }
}
