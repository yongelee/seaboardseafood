module.exports = {
	siteMetadata: {
		title: 'Seaboard Seafood Inc.'
	},
	pathPrefix: '/',
	plugins: [
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: './src/images/fav.jpg',
				injectHTML: true,
				icons: {
					android: true,
					appleIcon: true,
					appleStartup: true,
					coast: false,
					favicons: true,
					firefox: true,
					twitter: false,
					yandex: false,
					windows: false
				}
			}
		}
	]
};