plugins: [
  new CopyWebpackPlugin({ 
    patterns: [ 
     // relative path is from src
     { from: './static/favicon.ico' }, // <- your path to favicon
    ]
 })
]