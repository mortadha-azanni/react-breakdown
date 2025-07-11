// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.


 */
 module.exports =  {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🔧 Setting Up',
      collapsed : false,
      items: [
        'start',
        'installing'
      ],
    },
    {
      type: 'category',
      label: 'React UI',
      collapsed: false,
      items: [
        'react-ui/jsx',
        'react-ui/components-props',
        'react-ui/state-events',
        'react-ui/lists-keys',
      ],
    },
    /*{
      type: 'category',
      label: 'Hooks',
      items: [],
    },
    {
      type: 'category',
      label: 'Advanced Patterns',
      items: [],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      items: [],
    },*/
    {
      type: 'doc',
      id: 'about',
    },
  ],
};



